const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)

server.get('/', (req, res, next) => {
  res.status(200).json({message: 'We up!'})
})

server.use( (err, req, res, next) => { //eslint-disable-line
  const status = err.status || 500
  res.status(status).json({
    message: err.message
  })
})

module.exports = server
