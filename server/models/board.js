"use strict";
module.exports = (sequelize, DataTypes) => {
  var Board = sequelize.define(
    "Board",
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER
    }
    // {
    //   classMethods: {
    //     associate: function(models) {
    //       Board.belongsTo(models.User, {
    //         foreignKey: "userId",
    //         targetKey: "id"
    //       });
    //     }
    //   }
    // }
  );

  Board.associate = function(models) {
    // associations can be defined here

    //association between user and board
    Board.belongsTo(models.User, {
      foreignKey: "userId",
      targetKey: "id"
    });

    //association between board and list
    Board.hasMany(models.List, {
      foreignKey: "boardId",
      sourceKey: "id"
    });
  };

  return Board;
};
