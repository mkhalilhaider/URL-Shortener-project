const express = require("express");
const { connectToMongoDb } = require("./config/connection.js");
const urlRoutes = require("./routes/url.js");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//mongo db connections
connectToMongoDb(process.env.mongoDbConnectionString)
  .then(() => console.log("Mongo DB Connected"))
  .catch(() => console.log("Something went wrong!"));

// routes
app.use("/", urlRoutes);

// server listen
app.listen(PORT, (err) => {
  if (err) {
    console.log("Error accoured!", err);
  }
  console.log(`Server is running on port ${PORT}`);
});
