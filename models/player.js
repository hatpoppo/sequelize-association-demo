"use strict";
module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define(
    "player",
    {
      name: DataTypes.STRING
    },
    {}
  );
  player.associate = function(models) {
    // associations can be defined here
    models.player.assoc = models.player.hasMany(models.game);
  };
  return player;
};
