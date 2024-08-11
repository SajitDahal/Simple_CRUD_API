require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/products.route.js");
const app = express();

const MONGO_URL = process.env.MONGO_URL;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //add data using form URL encoded

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from the NodeApi server");
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(8000, () => {
      console.log("Server is running");
    });
  })
  .catch(() => {
    console.log("Error Occured");
  });
