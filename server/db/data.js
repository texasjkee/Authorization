const crypto = require('crypto')

const passwordSecret = 'abc'
const passwordHash = crypto.createHmac('sha256', passwordSecret).update('admin').digest('hex')

const fakeUser = {
  login: 'admin',
  passwordHash
}

module.exports = {
  passwordSecret,
  fakeUser
}
