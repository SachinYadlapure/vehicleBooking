const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const VehicleType = sequelize.define("VehicleType", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = VehicleType;
