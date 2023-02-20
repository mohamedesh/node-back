// const {Sequelize,DataTypes} = require("sequelize")
// const db = require("../db/db")
// const Users = require("./Users")
// const TaskLists = require('./TasksListModel')
//
//
// const usersTasksList = db.define("userTask",{
//     userId:{
//         type: DataTypes.INTEGER,
//         references:{
//             model : Users,
//             key:'id'
//         }
//     },
//     tasklistId:{
//         type: DataTypes.INTEGER,
//         references: {
//             model:TaskLists,
//             key:'id'
//         }
//     }
// })
//
//  Users.belongsToMany(TaskLists,{through:usersTasksList});
//  TaskLists.belongsToMany(Users,{through:usersTasksList})
//
//
//
// module.exports = usersTasksList

