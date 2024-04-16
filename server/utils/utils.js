const jwt = require('jsonwebtoken')

const signatureAccess = 'MySup3r_s3cr3t_access'
const signatureRefresh = 'MySup3r_s3cr3t_refresh'

const accessTokenAge = 5
const refreshTokenAge = 60 * 60

const getTokens = login => ({
  accessToken: jwt.sign({ login }, signatureAccess, {
    expiresIn: `${accessTokenAge}s`
  }),
  refreshToken: jwt.sign({ login }, signatureRefresh, {
    expiresIn: `${refreshTokenAge}s`
  })
})

module.exports = { getTokens, refreshTokenAge, signatureAccess, signatureRefresh }
