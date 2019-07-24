const express = require('express');
const router = express.Router();
const db = require("../models");

//retreive all datas
router.get('/', (req, res) => {
    db.Todo.find()
        .then((todos) => {
            res.json(todos);
        })
        .catch((err) => {
            res.send(err);
        });
});


//post req
router.post('/', (req, res) => {
    db.Todo.create(req.body)
        .then((newTodo) => {
            res.status(201).json(newTodo);
        }).catch((err) => {
            res.send(err);
        })
});

//show route
router.get('/:todoId', (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then((foundTodo) => {
            res.json(foundTodo)
        }).catch((err) => {
            res.send(err);
        })
});


//update
router.put('/:todoId', (req, res) => {
    db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
        .then((todo) => {
            res.json(todo);
        }).catch((err) => {
            res.send(err);
        })
});



//delete route
router.delete('/:todoId', (req, res) => {
    db.Todo.remove({ _id: req.params.todoId })
        .then(() => {
            res.json("todo deleted");
        }).catch((err) => {
            res.send(err);
        })
})


module.exports = router;