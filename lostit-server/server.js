require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/items", itemRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo Connected");

    app.listen(
      process.env.PORT,
      () => {
        console.log(
          `Server running on ${process.env.PORT}`
        );
      }
    );
  })
  .catch(console.error);