const {Sequelize,DataTypes} = require("sequelize")
const db = require("../db/db")
// const Task = require("./Task")
const Tasklist = require("./TasksListModel")
 // const usersTasksList = require("./usersTasksList")

const Users = db.define("Users",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    pseudo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mail:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        },
        unique : {
            message: 'email déjà pris'
        }
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }

},{
    timestamps:true,
    createdAt:'created',
    updatedAt:false

})

Users.hasMany(Tasklist,{
    foreignKey:{
        allowNull:false,
        name:"creator_id"
    },
    sourceKey:'id'
})




module.exports = Users