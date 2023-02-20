const {Sequelize,DataTypes} = require("sequelize")
const db = require("../db/db")
const Task = require("./Task")
// const usersTasksList = require("./usersTasksList");
// const Users = require("./Users")

const Tasklists = db.define('Tasklist', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull: false
    }


},{
    timestamps:true,
    createdAt:'created',
    updatedAt:true
});

Tasklists.hasMany(Task,{
    foreignKey:{
        allowNull:false,
        name:"task_list_id"
    },
        sourceKey:'id'
 })



module.exports = Tasklists