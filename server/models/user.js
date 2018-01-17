"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      classMethods: {
        //pls remove this and place outside like in boards model
        associate: function(models) {
          // associations can be defined here
          User.hasMany(models.Board, {
            foreignKey: "userId",
            sourceKey: "id"
          });
        }
      }
    }
  );

  // User.associate = function(models) {
  //   // associations can be defined here
  //   User.hasOne(models.Profile, {
  //     foreignKey: "userId"
  //   });
  // };

  return User;
};
