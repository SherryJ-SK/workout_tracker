const db = require("../models");
const router = require("express").Router();
const mongoose = require("mongoose");

// get data from Mongodb
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

// show workout status on route /stats
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

// create new workout id
router.post("/api/workouts", ({ body }, res) => {
    // console.log(body);
    db.Workout.create({ exercises: [body] })
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(({ message }) => {
            res.json(message);
        });
});

// input new exercise data into the new id
router.put("/api/workouts/:id", (req, res) => {
    // console.log(body);
    db.Workout.updateOne(
        {
            _id: mongoose.Types.ObjectId(req.params.id)
        },
        {
            $set: {
                exercises: req.body
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data)
            }
        }
    );
});

// post new workout info to route /stats
router.post("/api/workouts/range", ({ body }, res) => {
    db.Workout.create({ exercises: [body] })
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(({ message }) => {
            res.json(message);
        });
})

module.exports = router;