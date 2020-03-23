# Workout Tracker 📊

This application allows users to track the daily workout data, such as type of exercise, duration and sets etc..

Deployed Link: https://frozen-everglades-55303.herokuapp.com

## Description
Before enter any data, a schema has been created, as it allows the data goes into the correct fields and store in the MongoDB collection.

```
route '/'
```
On the main page, it gets the most recent saved record in MongoDB. 

```
route '/exercises'
```

The user can make new record or choose to continue the workout. When new exercise have been input, the data will be posted to the route '/api/workouts' and saved under an unique id in MongoDB.

```
route '/stats'
```

The stats page shows the total workout duration and different types of exercises, which are all get from the MongoDB through the route '/api/wourkouts/range'.

## How to use
*Continue Workout/ New Workout:*
Direct user to '/exercise' route, which allow user to choose the type of exercise. According to the different exercise, the information to be entered will change.

*Complete/ Add Exercise:*
Once the workout information has been saved, there will be a toast shows on the right tell the user the data has been saved.

*Dashboard:*
The Dashboard shows all the workout informaiton has been saved previously.

## Acknowledge
- Node.js
- Express.js
- MongoDB
- Heroku





