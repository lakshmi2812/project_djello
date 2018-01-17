"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let lists = [];
    for (var i = 1; i < 6; i++) {
      lists.push({
        title: `list${i}`,
        description: `lorem ipsum`,
        boardId: Math.round(i * 3 / 5)
      });
    }
    return queryInterface.bulkInsert("Lists", lists);
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
