//aqui importamos a express y  llamamos en una constante a Router pa hacer las ruticas :)
const { Router, response } = require('express');

//importamos el usrCont y ponemos las propiedades en sus respectivos metodos:)
const usrCont = require('../controllers/usrCont')

const userRoutes = Router();

userRoutes.post('/', usrCont.createUsr);
userRoutes.get('/', usrCont.readAllUsr);
userRoutes.get('/:id', usrCont.readOneUsr);
userRoutes.put('/:id', usrCont.actUsr);
userRoutes.delete('/:id', usrCont.deleteUsr);

module.exports = userRoutes;