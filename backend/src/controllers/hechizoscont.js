const {response} = require('express');

const HecModel = require('../models/HechizosMod');

const hecCont = {
    AddHec: async (req,res) => {
        try {
            const {nombre, efecto, mortal} = req.body

            const Hecadd = new HecModel ({nombre, efecto, mortal});

            const HecAdded = await Hecadd.save();

            res.json({msg: 'Agregadisisisisimo '});
        } catch (error) {
            res.json({msg: error});
        }
    },
    readAll: async (req, res) => {
        try {
            const readAll = await HecModel.find();
            res.json({msg: readAll});
        } catch (error) {
            res.json({error});
        }
    },
    readOne: async (req, res) => {
        try {
            const oneHec = await HecModel.findById(req.params.id);
            
            if(oneHec) res.json({msg: oneHec});
            
            else throw new Error ('Usuario no encontrado :(');
            
        } catch (error) {
            res.json({error: error.message || error});
        }
    },
    actHec: async (req, res) => {
        try {
            const actHec = await HecModel.findByIdAndUpdate(req.params.id, req.body)
            
            if (actHec) res.json({msg: 'actualizado'})
            
            else throw new Error ('Usuario no encontrado :(')
        } catch (error) {
            res.json({error: error.message || error})
        }
    },
    delHec: async (req, res) => {
        try {
            const delHec = await HecModel.findByIdAndDelete(req.params.id);
            if(delHec) res.json({msg: 'Eliminado'});
            else throw new Error ('Usuario no encontrado :(');
        } catch (error) {
            res.json({error: error.message || error});
        }
    },
}

module.exports = hecCont;