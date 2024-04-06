const sequelize = require("./db");
const VehicleType = require("./models/VehicleType");
const Vehicle = require("./models/Vehicle");

async function seed() {
  await sequelize.sync({ force: true });

  await VehicleType.bulkCreate([
    { name: "Hatchback" },
    { name: "SUV" },
    { name: "Sedan" },
  ]);

  await Vehicle.bulkCreate([
    { name: "Car 1", vehicleTypeId: 1 },
    { name: "Car 2", vehicleTypeId: 1 },
    { name: "Bike 1", vehicleTypeId: 2 },
  ]);

  console.log("Seed data inserted successfully");
}

seed();
