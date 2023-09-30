const jwt = require('jsonwebtoken');
//aqui importamos el jsonwebtoken:)

//en esa funcion creamos el token:)
function getToken(payload) {
    return new Promise ((resolve, reject) => {
        //creamos la promesa pa crear el token
        jwt.sign(
            //en la constante jwt usamos el .sign pa
            payload,
            /*eso es lo que vamos a guardar en el token, 
            digase los datos que se van a poner pa que el token se de
            como el id, el nombre, etc, eso se le da despues*/
            process.env.jwt_key,
            //usamos la llave pa crear el token :) la llave es secreta
            {expiresIn: '1d'},
            //el tiempo en el que expira el token
            (err, token) => {
                //esta funcion se ejecuta gracias a los datos que pasamos
                if(err){
                    //si la romesa falla nos da el error
                    reject({err})
                } else {
                    //si se resuelve nos da el token
                    resolve({ token });
                }
            }
        )
    })
}

module.exports=getToken