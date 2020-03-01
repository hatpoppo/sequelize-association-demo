"use strict";
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define(
    "employee",
    {
      name: DataTypes.STRING
    },
    {}
  );
  employee.associate = function(models) {
    // associations can be defined here
    models.employee.belongsToMany(models.company, { through: "EmployeeCompany" });
  };
  return employee;
};
