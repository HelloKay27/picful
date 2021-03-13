const Sequelize = require("sequelize");
const db = require("../database");

//Log Model
const Log = db.define("log", {
  date: {
    type: Sequelize.DATE,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

module.exports = Log;

// regDate: {
//   type: DataTypes.DATEONLY,
//   get: function() {
//     return moment.utc(this.getDataValue('regDate')).format('YYYY-MM-DD');
//   }
// }
