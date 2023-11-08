const emailRouter = require('express').Router()
const { enviarEmail } = require('../controllers/emailController')

emailRouter.post('/enviarEmail', enviarEmail)


module.exports = emailRouter