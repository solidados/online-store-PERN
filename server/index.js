require("dotenv").config();
const express = require("express");
const sequelize = require("./db");

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate(); /** this is to connect to my DB */
    await sequelize.sync(); /** this will sync my DB with DB schema for any changes */
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error.message);
  }
};

start();
