const Sequelize = require('sequelize')

const sequelize = new Sequelize('snepTeste', 'root', 'password', {
    host: 'localhost', 
    dialect:'mysql', 
    operatorsAliases: false
})

module.exports = sequelize