const Mongoose = require("mongoose");
require('dotenv/config');

const localDB = process.env.DATABASE_DRIVER + `://` + process.env.DATABASE_HOST + `:` + process.env.DATABASE_PORT + `/` + process.env.DATABASE_NAME;

const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected");
};

module.exports = connectDB;