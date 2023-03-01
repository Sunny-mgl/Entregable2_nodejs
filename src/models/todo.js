const {password} = require ('pg/lib/defaults')
const {DataTypes} = require('sequelize')
const db = require('../utils/db')

const ToDo = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    statu: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
})

module.exports = ToDo