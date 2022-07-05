
const express = require('express')

//controllers
const { getTask, createTask, getUserById, updateTask, deleteTask } = require('');

//middlewares
const { taskExists } = require('../middlewares/taskMiddlewares')
const { createTaskValidator } = require('../middlewares/expresValidatorMiddleware')

const taskRouter = express.Router();

//routes
taskRouter.get('/', getTask)
taskRouter.post('/', createTaskValidator, createTask)
taskRouter.get('/:status', getUserById)
taskRouter
    .route('/:id')
    .patch(taskExists, updateTask)
    .delete(taskExists, deleteTask);


module.exports = { taskRouter };