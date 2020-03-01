'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    name: DataTypes.STRING
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
  };
  return employee;
};