var models = require("./models");
var hasOne = require("./src/hasOne");
models.sequelize.sync().then(() => {
  /**
   * 処理
   */
  hasOne.create_user({
    name: "john",
    task: {
      name: "task2"
    }
  });
});
