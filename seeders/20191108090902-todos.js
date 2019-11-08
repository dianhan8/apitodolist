'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('todos', [{
        title: 'John Doe',
        category: 1,
	isDone: false,
	createdAt: new Date(),
	updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('todos', null, {});
  }
};
