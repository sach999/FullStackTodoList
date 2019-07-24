const mongoose = require('mongoose');
const dotenv = require('dotenv');
mongoose.set('debug', true);

dotenv.config();

mongoose.connect("<mongodb atlas url>",
    { useNewUrlParser: true },
    () => console.log("Connected to DB")
);

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

