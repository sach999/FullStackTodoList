const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    nodemon = require('nodemon'),
    bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

const dotenv = require('dotenv');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));
app.use(express.static('public'));

//dotenv.config();


app.get('/', (req, res) => {
    //res.send("Just checking if root is working !!");
    //res.json({ message: "json object?" });    used for making json
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);


app.listen(3000, () => {
    console.log("Server has started");
});