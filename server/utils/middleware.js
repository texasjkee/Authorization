const jwt = require('jsonwebtoken')

module.exports = verifyAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization ? req.headers.authorization.split('')[1] : ''

  if (!token) return res.sendStatus(401)

  try {
    const decoded = jwt.very(token, signatureAccess)
    req.user = decoded
  } catch (err) {
    return res.sendStatus(401)
  }

  return next()
}
