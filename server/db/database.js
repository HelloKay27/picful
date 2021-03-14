const Sequelize = require("sequelize");
const pkg = require("../../package.json");

module.exports = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`,
  {
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
