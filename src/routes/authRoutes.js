const authRouter = require('express').Router()
const { authenticate, register, verifyToken } = require('../controllers/authControllers')

authRouter.post('/auth', authenticate)

authRouter.post('/verify', verifyToken)

module.exports = authRouter