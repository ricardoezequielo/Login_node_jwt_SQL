const express = require ('express')
const router = express.Router()

const conexion =  require('../database/db')

router.get('/', (reg, res)=>{
    conexion()
    res.render('index')
})

router.get('/login', (reg, res)=>{
    res.render('login')
})

router.get('/register', (reg, res)=>{
    res.render('register')
})
module.exports = router
