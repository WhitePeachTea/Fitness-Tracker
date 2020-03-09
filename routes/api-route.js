const express = require("express");
const path = require("path");
const db = require("../models");

var apiRoute = express.Router();

apiRoute.get('/api/workouts', async function(req, res){
    let result = await db.Workout.find({});
    res.json(result);
});

apiRoute.put('/api/workouts/:id', async function(req, res){
    let id = req.params.id;
    let exercise = req.body;
    if (!id) {
        console.log('not ID!');
    } else {
        await db.Workout.findByIdAndUpdate(id, {$push: {exercises: exercise}});
        res.json({'id': id});
    }
});

apiRoute.post('/api/workouts', async function(req, res){
    let workout = new db.Workout({exercises: []});
    let result = await workout.save();
    res.send(result);
});

apiRoute.get('/api/workouts/range', async function(req, res){
    let result = await db.Workout.find({});
    res.json(result);
});

module.exports = apiRoute;