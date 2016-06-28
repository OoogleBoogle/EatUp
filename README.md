# EatUp
Social Food Pairing/Dating App

EatUp is an app that helps people find the best restaurants and dining companions in their area. After the user selects a food type, EatUp will match them with another user with the same restaurant result. 

## Screenshots

![alt text](http://imgur.com/6yie6SX)

![alt text](https://www.dropbox.com/s/f8l3jrz1oc2bonp/Screen%20Shot%202016-05-27%20at%201.03.38%20PM.png “Confirmation page“)

![alt text](https://www.dropbox.com/s/bvy34ps9qbf8ny1/Screen%20Shot%202016-05-27%20at%201.11.29%20PM.png “Confirmed page“)

## Tech Stack

Our front-end uses React and Redux

Our back-end uses Node.js, Express, and MongoDB

## Challenges

Sending information from the front end to the back end.

We came across issues sending information from the front end of the app to the backend.

We used React to render the front end and Redux to capture the information from the front end so it can be sent over to the back end.

The back end, using MongoDB and Mongoose, stores the user and their preferences to the database.

The problem we were having was that Redux and the backend was not talking to one another. We were receiving 405 http error messages when we attempted to save the user after selecting a type of food to eat.

We were using the node module isomorphic-fetch to handle the collecting information from the user on POST.

It turned out that the ports that we were listening to for our server and the ports that we were listening to for Redux were the same. Therefore we set our server to listen to port 3000 and the webpack-dev-server to be on port 8080. This allowed us to talk to our database and save our user.

## Components

The React components can be found in the js folder

The Redux files can be found in the redux folder

The MongoDB/Node.js/Express files can be found the model, db, and data folders
