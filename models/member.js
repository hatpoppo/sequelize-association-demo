"use strict";
module.exports = (sequelize, DataTypes) => {
  const member = sequelize.define(
    "member",
    {
      name: DataTypes.STRING
    },
    {}
  );
  member.associate = function(models) {
    // associations can be defined here
    models.member.belongsTo(models.project);
  };
  return member;
};
