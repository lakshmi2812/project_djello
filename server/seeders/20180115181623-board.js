"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var boards = [
      { title: "Job Hunt", userId: 1 },
      { title: "Vacation", userId: 9 },
      { title: "groceryList", userId: 5 }
    ];
    return queryInterface.bulkInsert("Boards", boards);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
