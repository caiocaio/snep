const Sequelize = require('sequelize')



module.exports = sequelize.define('queuestatus', {

  id: {
    type: Sequelize.INTEGER(11), 
    allowNull: false, 
    autoIncremente: true, 
    primaryKey: true, 
  },

  content: Sequelize.JSON,

})

