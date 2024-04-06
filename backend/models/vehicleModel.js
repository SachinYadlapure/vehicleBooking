const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const VehicleType = require("./VehicleType");

const VehicleModel = sequelize.define("VehicleModel", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: VehicleType,
      key: "id",
    },
  },
});

module.exports = VehicleModel;
