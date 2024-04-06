const { Op } = require("sequelize");
const { VehicleModel } = require("../models/vehicleModel");

async function bookVehicle(req, res) {
  try {
    const { userId, vehicleId, startDate, endDate } = req.body;

    const isAvailable = await isVehicleAvailable(vehicleId, startDate, endDate);
    if (!isAvailable) {
      return res
        .status(400)
        .json({ error: "Vehicle is not available for the specified dates" });
    }

    const booking = await VehicleModel.create({
      userId,
      vehicleId,
      startDate,
      endDate,
    });

    res.status(200).json({ message: "Booking successful", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function isVehicleAvailable(vehicleId, startDate, endDate) {
  const existingBooking = await VehicleModel.findOne({
    where: {
      vehicleId,
      [Op.or]: [
        {
          startDate: {
            [Op.between]: [startDate, endDate],
          },
        },
        {
          endDate: {
            [Op.between]: [startDate, endDate],
          },
        },
      ],
    },
  });

  return !existingBooking;
}

module.exports = {
  bookVehicle,
};
