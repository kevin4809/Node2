
const express = require('express')

//controllers
const { getAllUsers, createUsers, updateUser, deleteUser } = require('../controllers/userController');

const usersRouter = express.Router();

//routes
usersRouter.get('/', getAllUsers)
usersRouter.post('/', createUsers)
usersRouter.patch('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)

module.exports = { usersRouter };