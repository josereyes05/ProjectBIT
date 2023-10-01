const { Router, response } = require('express');
/*llamamos a los metodos Router y response de express, pa que las rutas den una respuesta 
con los controladores que haremos despues.*/
const hecCont = require('../controllers/hechizoscont');

const hechizos = Router()
/*En esta constante llamamos a Router pa enrutar la api :)*/

/*creamos las rutas :)*/
hechizos.post('/', hecCont.AddHec)
hechizos.get('/', hecCont.readAll)
hechizos.get('/:id', hecCont.readOne)
hechizos.put('/:id', hecCont.actHec)
hechizos.delete('/:id', hecCont.delHec)


module.exports = hechizos;