var models = require("./models");
var createdata = require("./src/createdata");
models.sequelize.sync().then(() => {
  /**
   * データの作成処理
   */
  createdata.create_user({
    name: "john",
    task: {
      name: "task2"
    }
  });
  createdata.create_member({
    name: "carol",
    project: {
      name: "project"
    }
  });
  createdata.create_player({
    name: "john",
    games: [
      {
        name: "game1"
      },
      {
        name: "game2"
      }
    ]
  });
  createdata.create_employee({
    name: "jane",
    companies: [
      {
        name: "com1"
      },
      {
        name: "com2"
      }
    ]
  });
});
