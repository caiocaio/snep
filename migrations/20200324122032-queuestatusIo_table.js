'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("queuestatus"),{
      id: {
        type: Sequelize.INTEGER(11), 
        allowNull: false, 
        autoIncremente: true, 
        primaryKey: true, 
      },
    
      content: Sequelize.JSON,
      createdAt: Sequelize.DATE, 
      updatedAt: Sequelize.DATE,
    }
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("queuestatus")
  }
};
