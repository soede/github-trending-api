const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Repository = sequelize.define("Repository", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Repository;
