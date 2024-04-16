const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRouter = require('./router/authRouter')

const server = express()

server.use(cors())
server.use(express.json())
server.use(cookieParser())
server.use(authRouter)

const PORT = 3000

server.listen(PORT, () => console.log(`Server is running on ${PORT}`))
