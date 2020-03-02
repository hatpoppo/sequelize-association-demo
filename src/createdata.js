var models = require("../models");

exports.create_user = object => {
  models.user.create(object, { include: models.user.assoc }).then(rec => {
    console.log("create:", JSON.stringify(rec));
  });
};
exports.create_member = object => {
  models.member.create(object, { include: models.member.assoc }).then(rec => {
    console.log("create:", JSON.stringify(rec));
  });
};
exports.create_player = object => {
  models.player.create(object, { include: models.player.assoc }).then(rec => {
    console.log("create:", JSON.stringify(rec));
  });
};
exports.create_employee = object => {
  models.employee.create(object, { include: models.employee.assoc }).then(rec => {
    console.log("create:", JSON.stringify(rec));
  });
};
