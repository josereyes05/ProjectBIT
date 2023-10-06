const bcrypt = require('bcrypt');
//luego vamos a comparar con la contra ya exsistente :) soooooo lo necesitamos va?

const UserModel = require('../models/usrMod');
//pa comparar si los datos de inicio de sesion son los mismos de la db

const getToken = require('../helpers/gets');
const { response } = require('../server');
//el token de inicio de sesion :)

const loginCont = {
    loginuser: async (req,res) => {
        try {
            const { email, password } = req.body
            const userFound = await UserModel.findOne({ email });
            /*ahi pedimos el email y password si quieres con user name crea otra const 
            pal name va? y en el otro buscamos el mail dado :)*/ 
            
            if (userFound) {
                //aqui validamos si el mail existe:)
                const isValid = await bcrypt.compare(
                    /*en este comparamos la contra dada en el login 
                    con la de la base de datos*/
                    password, userFound.password
                )
                if(isValid){
                    //validamos si la contra es buena:)
                    const token = await getToken({
                        //damos el payload al token para ser creado :)
                        id: userFound._id,
                        name: userFound.name
                    })
                    res.json(token)
                }else{
                    res.json({msg: 'Error en credenciales'})
                }
            } else {
                res.json({msg: 'Error en credenciales'})
            }
        } catch (error) {
            res.json({msg: error})
        }
    }
};

module.exports=loginCont;