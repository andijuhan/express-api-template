const express = require('express');
const { createTodo, getTodos, updateTodo } = require('./todo-controller');
const createTodoValidator = require('./validators/create-todo-validator');
const router = express.Router();

router.get('/', getTodos);

router.post('/', createTodoValidator, createTodo);

router.patch('/:id', updateTodo);

module.exports = router;
