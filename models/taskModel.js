
const { db } = require('../utils/dataBaseUtil')
const { DataTypes } = require('sequelize')

const Task = db.define('task', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    limitDate: {
        type: DataTypes.DATE,
        allowNull: false

    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    finishDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        default: 'active',
        allowNull: true
    }

});

module.exports = { Task };