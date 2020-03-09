const express = require("express");
const path = require("path");
const htmlRoute = express.Router();

htmlRoute.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

htmlRoute.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

htmlRoute.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

module.exports = htmlRoute;
