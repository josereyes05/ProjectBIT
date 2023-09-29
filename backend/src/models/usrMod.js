//no se te olvide llamar a mongoose
const { Schema, model } = require("mongoose");

const UsrSchema = new Schema(
    {
        name:{type: String, require: true},
        lastname:{type: String, require: true},
        nickname:{type: String, require: true},
        email:{type: String, require: true},
        password:{type: String, require: true},
        phone:{type: Number, require: true},
        gender:{type: String, require: true},
        pronouns:{type: String, require: true},
        birthday: {type: Date, require: true}
    },
    {timestamps:true, versionKey: false}
)

/*
el model() es pa asignarle a lo que hicimos arriba el model de la primera const
y el mongoose tome eso como un modelo pa la base de datos.

EL 'User' es el nombre de la coleccion en la BD (base de datos):)
*/ 
module.exports = model('User', UsrSchema)