const db = require("../database");
const User = require("./user");
const Log = require("./log");

//Association
Log.belongsTo(User);
User.hasMany(Log);

module.exports = {
  db,
  User,
  Log,
};
