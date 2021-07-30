const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router')
const classRouter = require('./classes/class-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/classes', classRouter)

server.get('/', (req, res, next) => { //eslint-disable-line
  res.status(200).json({message: 'We up!'})
})

server.use( (err, req, res, next) => { //eslint-disable-line
  const status = err.status || 500
  res.status(status).json({
    message: err.message
  })
})

module.exports = server
