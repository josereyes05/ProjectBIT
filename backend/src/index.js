const express = require('express');

//con esta llamada del dotenv es la unica que hacemos porque es el archivo raiz
const env = require('dotenv').config();

//aqui importamos la base de datos:)
const db = require('./db');

// requerimos al servidor y luego pedimos el puerto en el que va a correr :)
const servidor = require('./server');
const porto = servidor.get('porto')

//con el .listen prendemos el servidor y el mensaje nos dice que ps ta prendido :)
servidor.listen(porto, () => {
    console.log(`El server corre en el puerto ${porto}`);
})