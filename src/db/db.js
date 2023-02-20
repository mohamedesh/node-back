const {Sequelize} = require("sequelize")


const sequelize = new Sequelize(
    "todolist",
    "root",
    "root",
    {
        host:"localhost",
        port:8889,
        dialect:"mariadb",
        dialectOptions:{
            timezone:'Etc/GMT-2'
        }
    }

)

sequelize.authenticate()
    .then(_=>console.log(`La connexion est etablie`))
    .catch(error => console.error("Erreur de connexion :",error))

// lien vers la bdd
sequelize.sync()
    .then(_=>console.log(`La synchronisation est etablie `))
    .catch(error => console.error("Erreur de synchronisation :",error))

module.exports = sequelize