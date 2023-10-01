const { Router, response } = require('express');
/*llamamos a los metodos Router y response de express, pa que las rutas den una respuesta 
con los controladores que haremos despues.*/

const hechizos = Router()
/*En esta constante llamamos a Router pa enrutar la api :)*/

/*creamos las rutas :)*/
hechizos.post('/', () => console.log('Agregadisisisisimo '))
hechizos.get('/', () => console.log('Ya leí todos '))
hechizos.get('/:id', () => console.log('Ya leí uno '))
hechizos.put('/:id', () => console.log('actualizadisisisimo ')),
hechizos.delete('/:id', () => console.log('eliminadisimo'))


module.exports = hechizos;