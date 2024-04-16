const { Router } = require('express')
const authRouter = Router()
const verifyAuthMiddleware = require('../utils/middleware')
const {
  logInController,
  logOutController,
  takeProfileController
} = require('../controller/authController')

authRouter.post('/login', logInController)
authRouter.get('/logout', logOutController)
authRouter.get('/profile', verifyAuthMiddleware, takeProfileController)

module.exports = authRouter
