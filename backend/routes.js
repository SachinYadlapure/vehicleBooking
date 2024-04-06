const express = require("express");
const router = express.Router();
const bookingController = require("./controllers/bookingController");
const vehicleController = require("./controllers/vehicleController");

// Booking routes
router.post("/booking", bookingController.bookVehicle);

// Vehicle routes
router.get("/vehicles/types", vehicleController.getVehicleTypes);
router.get("/vehicles/:type/models", vehicleController.getVehicleModelsByType);

module.exports = router;
