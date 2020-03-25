'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("events", {
      id: {
        type: Sequelize.INTEGER(11), 
        autoIncrement: true, 
        primaryKey: true, 
      },
      type: Sequelize.STRING,
      content: Sequelize.JSON,
      createdAt: Sequelize.DATE, 
      updatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events', null, {});
  }
};
