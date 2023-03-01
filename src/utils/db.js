const {password} = require('pg/lib/defaults')
const {sequelize, Sequelize} = require('sequelize')
const db = new Sequelize ({
    database:"todos",
    port: 5432,
    username: "postgres",
    password: "Sunny",
    dialect: "postgres"
})

module.exports= db