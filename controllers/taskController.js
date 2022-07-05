const { Model } = require('sequelize/types');
const { default: ModelManager } = require('sequelize/types/model-manager');
const { Task } = require('../models/taskModel');
const { AppError } = require('../utils/appError');


//utils
const { catchAsync } = require('../utils/catchAsyn')

const getTask = catchAsync(async (req, res, next) => {

    const task = await Task.findAll()
    res.status(201).json({
        status: 'success',
        task
    })


})

const createTask = catchAsync(async (req, res, next) => {

    const { title, userId, limitDate, startDate } = req.body;
    const newTask = await Task.create({
        title,
        userId,
        limitDate,
        startDate
    });

    res.status(201).json({
        status: 'success',
        newTask

    })

})


const getUserById = catchAsync(async (req, res, next) => {

    const { status } = req.params;

    const validStatus = ["active", "completed", "late", "cancelled"]

    const isValid = validStatus.find(el => el === status);

    if (!isValid) {
        return next(new AppError("status must be ither active, completed, late or cancelled", 400))
    }


    const task = await Task.findAll({ where: { status } });

    res.status(200).json({ task })

})

const updateTask = catchAsync(async (req, res, next) => {

    const { task } = req;
    const { finishDate } = req.body;

    const limitDateNum = new Date(task.limitDate).getTime();
    const completeDate = new Date(finishDate).getTime();

    const isComplete = limitDateNum - completeDate;

    if (isComplete > 0) {
        await task.update({ finishDate, status: "completed" })
    } else {
        await task.update({ finishDate, status: "late" })
    }

    res.status(200).json({
        status: 'success',
        task

    })

})

const deleteTask = catchAsync(async (req, res, next) => {

    const { task } = req;

    await task.update({ status: 'cancelled' })
})




module.exports = { getTask, createTask, getUserById, updateTask, deleteTask }
