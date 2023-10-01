const express = require('express')
const morgan = require('morgan')

const server = express()
//arribita en la 4 llamamos al servidor 🤨

//llamamos al puerto desde el .env pa que sea secreto :)
const porto = process.env.port

//configuramos el servidor en ese puerto 🤨
server.set('porto', porto)

//esto es para que cuando hagamos la peticion en consola nos tira cual es y que respondio :)
server.use(morgan('dev'))
server.use(express.json())

//no se te olvide que no puedes hacer esto arriba porque esto existira antes que el server jaj
//llamamos e importamos la ruta de los users
const userRoutes = require('./routes/userRoutes')
const hechizosRoutes = require('./routes/hechizosRoutes')

//aqui ya usamos las rutas :)
server.use('/users/', userRoutes)
server.use('/hechizos/', hechizosRoutes)

server.get('/', (req, res) => {
    /*En el '/' hacemos una peticion a la raiz osea el index.js :)
    la ruta pa que esto se ejecute es el localhost/:porto o 127.0.0.1/:porto :)*/
    res.json({message:'holi :)'});
})

module.exports = server;