var models = require("../models");

exports.create_user = object => {
  models.user.create(object, { include: models.user.assoc }).then(rec => {
    console.log("create:", JSON.stringify(rec));
  });
};
