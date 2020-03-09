const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiRoute = require("./routes/api-route");
const htmlRoute = require("./routes/html-route");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


app.use(apiRoute);
app.use(htmlRoute);


db.Workout();
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
