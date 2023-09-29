const userControllers = {
    createUsr: (req,res) => {
            res.json({msg:'creado 🥳'});
        },
    readAllUsr: (req,res) => {
            res.json({msg:'leí todos los users 😵'});
        },
    readOneUsr: (req,res) => {
            res.json({msg:'so un usuario 😴'});
        },
    actUsr: (req,res) => {
            res.json({msg:'actualizadisimo 👾'});
        },
    deleteUsr:  (req,res) => {
            res.json({msg:'eliminadisimo 💀'});
        }
};

module.exports =userControllers;