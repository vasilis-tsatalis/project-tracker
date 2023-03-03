'use strict';
// load npm modules
const express = require("express");
const flash = require("express-flash");
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
require('dotenv/config');

const BASE_URL = process.env.BASE_URL || '/api';
const PORT = process.env.PORT || 4445;

const app = express();

app.use(cors());
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(express.json());
app.set("view engine", "ejs");
app.use(flash());

// Routes 
app.use(BASE_URL, require("./routes/api"));

//----------HTTP SERVER----------//
const server = app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
