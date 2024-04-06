const Sequelize = require("sequelize");
const dbConfig = require("./config");

// Extracting development configuration
const { username, password, database, host, dialect } = dbConfig.development;

// Creating Sequelize instance
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

module.exports = sequelize;
