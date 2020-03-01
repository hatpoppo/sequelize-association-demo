'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    name: DataTypes.STRING
  }, {});
  project.associate = function(models) {
    // associations can be defined here
  };
  return project;
};