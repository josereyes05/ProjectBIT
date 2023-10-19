const {response} = require('express');

const HecModel = require('../models/HechizosMod');

const hecCont = {
    AddHec: async (req,res) => {
        try {
            const {nombre, efecto, mortal} = req.body

            const exname = await HecModel.findOne({'nombre' : nombre})
            const exef = await HecModel.findOne({'efecto': efecto})

            if(exname || exef){
                res.status(400).send(
                    {
                        msg: `Ups el efecto o el nombre ya existe :(`,
                        ok: false
                    })
            }else{
                const Hecadd = new HecModel ({nombre, efecto, mortal});
                const HecAdded = await Hecadd.save();    
                res.status(201).send(
                    {
                        msg: 'Agregadisisisisimo',
                        ok: true
                    });
            }
        } catch (error) {
            res.status(500).json(
                {
                    msg: error,
                    ok: false
                });
        }
    },
    readAll: async (req, res) => {
        try {
            const readAll = await HecModel.find();
            res.json({allHechizos: readAll});
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
    readN: async (req, res) => {
        try {
            const oneHec = await HecModel.findOne({"nombre": req.params.nombre});

            if(oneHec) res.json({msg: oneHec});
            
            else throw new Error ('Hechizo no encontrado :(');

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