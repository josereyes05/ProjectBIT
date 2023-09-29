const express = require('express')
const morgan = require('morgan')

//esto es pa que la variable del .env funcione aquí :)
const env = require('dotenv').config

const server = express()

//llamamos al servidor desde el .env pa que sea secreto :)
const porto = process.env.port

server.set('porto', porto)

//esto es para que cuando hagamos la peticion en consola nos tira cual es y que respondio :)
server.use(morgan('dev'))
server.use(express.json())

server.get('/', (req, res) => {
    
    res.send('holi :)');
})

module.exports = server;