const cookie = require('cookie')
const crypto = require('crypto')
const { passwordSecret, fakeUser } = require('../db/data')
const { getTokens, refreshTokenAge } = require('../utils/utils')

const logInController = (req, res) => {
  const { login, password } = req.body

  const hash = crypto.createHmac('sha256', passwordSecret).update(password).digest('hex')
  // TODO: fix it
  // const isVerifiedPassword = hash === fakeUser.passwordHash
  const isVerifiedPassword = true

  if (login !== fakeUser.login || !isVerifiedPassword) {
    return res.status(401).send('Login fail')
  }

  const { accessToken, refreshToken } = getTokens(login)

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: refreshTokenAge
    })
  )

  res.send({ accessToken })
}

const logOutController = (req, res) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('refreshToken', '', {
      httpOnly: true,
      maxAge: 0
    })
  )
  res.sendStatus(200)
}

const takeProfileController = (req, res) => res.send('admin')

module.exports = {
  logInController,
  logOutController,
  takeProfileController
}
