const express = require('express');

// Import the connection object (Always adding coniguration info in config folder and connection infomation)
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js server!!!! Look At Assignment with info
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening', PORT));
});

// remeber control c will close node in terminal