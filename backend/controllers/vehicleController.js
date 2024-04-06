const { VehicleType } = require("../models/VehicleType");
const {VehicleModel} = require("../models/vehicleModel")

async function getVehicleTypes(req, res) {
  try {
    const vehicleTypes = await VehicleType.findAll();
    res.status(200).json(vehicleTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getVehicleModelsByType(req, res) {
  const { type } = req.params;
  try {
    const vehicleModels = await VehicleModel.findAll({
      where: { typeId: type },
    });
    res.status(200).json(vehicleModels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getVehicleTypes,
  getVehicleModelsByType,
};
