const mongoose = require('mongoose')

.connect(
    process.env.mongo
)
.then((db) => (console.log('conectado la basesita 🤑')))
.catch((db) => console.log("conectadon't a la base 😓"))