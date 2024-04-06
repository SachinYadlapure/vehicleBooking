const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const sequelize = require("./config/sequelize.config");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", routes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
