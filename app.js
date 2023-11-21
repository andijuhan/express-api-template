const express = require('express');
const app = express();
const todoRoutes = require('./todos/todo-routes');
const compression = require('compression');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(compression());
app.use(cookieParser());

app.use('/todos', todoRoutes);

module.exports = app;
