const { Router } = require('express')
const authRouter = Router()
const { verifyRefreshTokenMiddleware, verifyAuthMiddleware } = require('../utils/middleware')
const {
  logInController,
  logOutController,
  takeProfileController,
  refreshController
} = require('../controller/authController')

authRouter.post('/login', logInController)
authRouter.get('/logout', logOutController)
authRouter.get('/profile', verifyAuthMiddleware, takeProfileController)
authRouter.get('/refresh', verifyRefreshTokenMiddleware, refreshController)

module.exports = authRouter
