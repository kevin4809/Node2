
const { db } = require('../utils/dataBaseUtil')
const { DataTypes } = require('sequelize')

const User = db.define('user', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false

    },
    status: {
        type: DataTypes.STRING,
        default: "active",
        allowNull: true
    }

});

module.exports = { User };