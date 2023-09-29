const express = require('express');
const env = require('dotenv').config();
const db = require('./db');

// requerimos al servidor y luego pedimos el puerto en el que va a correr :)
const servidor = require('./server');
const porto = servidor.get('porto')

servidor.listen(porto, () => {
    console.log(`El server corre en el puerto ${porto}`);
})