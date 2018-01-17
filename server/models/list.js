"use strict";
module.exports = (sequelize, DataTypes) => {
  var List = sequelize.define(
    "List",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      boardId: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );

  List.associate = function(models) {
    // associations can be defined here

    //association between user and board
    List.belongsTo(models.Board, {
      foreignKey: "boardId",
      targetKey: "id"
    });
  };

  return List;
};
