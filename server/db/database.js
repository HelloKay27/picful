const Sequelize = require("sequelize");
const pkg = require("../../package.json");

module.exports = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false,
});
