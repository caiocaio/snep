const Sequelize = require('sequelize')

const io = require('socket.io-client')
const socket = io.connect('http://192.168.1.180:5000', { reconnect: true });

const sequelize = new Sequelize('snepTeste', 'root', 'password', {
    host: 'localhost', 
    dialect:'mysql', 
    operatorsAliases: false
})

module.exports = socket
module.exports = sequelize
global.sequelize = sequelize