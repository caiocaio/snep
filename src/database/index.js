const Sequelize = require('sequelize')
const conections = require('./connection')

const conect = new Sequelize(conections)

module.exports = conect