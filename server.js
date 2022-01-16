const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};

connectDB();
app.use(express.static("public"));
const PORT = process.env.PORT;
const server = app.listen(PORT, () => console.log(`app running at ${PORT}`));
