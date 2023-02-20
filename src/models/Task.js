const {Sequelize,DataTypes} = require("sequelize")
const db = require("../db/db")

const Task = db.define( "Task",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    active:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
    })



module.exports = Task