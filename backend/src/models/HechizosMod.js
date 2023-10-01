const { Schema,Model, model } = require('mongoose');

const HechizosShema = new Schema({
    nombre:{type: String, require: true},
    efecto:{type: String, require: true},
    mortal:{type: Boolean}
},
{versionKey: false})

module.exports = model('Hechizo', HechizosShema)