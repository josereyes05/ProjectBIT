//importamos el modelo del usuario :)
const UserModel = require("../models/usrMod");

//importamo bcrypt pa eencriptar algunos datos :)
const bcrypt = require("bcryptjs");

const { response } = require("express");
//importamos el generador del token :)
const jwt = require('../helpers/gets');

const userControllers = {
  createUsr: async (req, res) => {
    try {
        /*pedimos del req.body los datos del {} eso es pa que 
        la constante tome solo esos datos en caso de haber mas so tomaria esos;)*/
    const {name, lastname, nickname, email, password, 
        phone, gender, pronouns, birthday} = req.body
        
        /* aqui vamos a encriptar o hashear la contraseña :) */
        const hashpassword = await bcrypt.hash(password, 8);
        const newUser = new UserModel({
            name: name,
            lastname: lastname,
            nickname: nickname,
            email: email,
            password: hashpassword,
            phone: phone,
            gender: gender,
            pronouns: pronouns,
            birthday: birthday
        })
        //guardamos el usuario :)
        const  usrCrted = await newUser.save()
        
        const tkn = await jwt({
          //el json debe tener el nombre de la const con la que importamos el token generator
          //estos datos son pal payload
          id: usrCrted._id,
          name: usrCrted.name,
          lastname: usrCrted.lastname,
          nickname: usrCrted.nickname,
        })

        res.json({ msg: `usuario fue creado 🥳`, tkn });
        console.log(tkn);
    } catch (error) {
    
        res.json({ msg: "error al crear" });
    
    }
  },
  readAllUsr: async (req, res) => {
    try {
        const AllUsrs = await UserModel.find()
        //el .find sin nada va a tirar toooodo lo que tenga que ver con UserModel
        res.json({ msg: `leí todos los users 😵`, AllUsrs});
    } catch (error) {
        res.json({msg: 'error al leer los usuarios'})
    }
  },
  readOneUsr: async (req, res) => {
    try {
        const oneUsr = await UserModel.findById(req.params.id)
        if (oneUsr) res.json({ msg: "so un usuario 😴", oneUsr});
        else throw new Error('usuario no encontrado 😓')
        //el new error se tira cuando el id se parece a uno existente pero no es jaj
    } catch (error) {
      /*el error. message se tira cuando el id ni se asemeja y 
        el otro es cuando no se tiene ni el error.message*/
      res.json({error: error.message || 'error al encontrar el usuario'})
    }
  },
  actUsr: async (req, res) => {
    try {
        const {name, lastname, nickname, email, password, 
        phone, gender, pronouns, birthday} = req.body
        //aqui destructuramos el req.body pa tener cada dato posible en un {}
        if (password) {
          //aqui preguntamos si password se da en el req.body se ejecuta todo lo de abajo
          const hashpassword = await bcrypt.hash(password, 8);
          
          const uptUsr = await UserModel.findByIdAndUpdate(req.params.id,
            {name, lastname, nickname, email, password: hashpassword, 
              phone, gender, pronouns, birthday})
              //aqui damos toooodo eso que es porque req.body es eso recuerda
              
              if (uptUsr) res.json({ msg: `actualizadisimo 👾`});
              else throw new Error('usuario no encontrado 😓')
        }else{
          const uptUsr = await UserModel.findByIdAndUpdate(req.params.id,
            {name, lastname, nickname, email, password, 
              phone, gender, pronouns, birthday})

              if (uptUsr) res.json({ msg: `actualizadisimo 👾`});
              else throw new Error('usuario no encontrado 😓')
        }
        //const hashpassword = await bcrypt.hash(password, 8);
    } catch (error) {
        res.json({error: error.message || 'error al encontrar el usuario'})
    }
  },
  deleteUsr: async (req, res) => {
    try {
        const delUsr = await UserModel.findByIdAndDelete(req.params.id)
        
        if (delUsr) res.json({ msg: "eliminadisimo 💀" });
        else throw new Error('usuario no encontrado 😓')
    } catch (error) {
        res.json({error: error.message || 'error al encontrar el usuario'})
    }
  }
};

module.exports = userControllers;
