//Models
const { User } = require('../models/userModel');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll()
        res.status(201).json({
            status: 'success',
            users
        })
    } catch (err) {
        console.log(err)
    }
}

const createUsers = async (req, res, next) => {

    const { name, email, password } = req.body;

    try {
        const newUser = await User.create({
            name,
            email,
            password,

        });

        res.status(201).json({
            status: 'success',
            newUser

        })
    } catch (err) {
        console.log(err)
    }

}

const updateUser = async (req, res) => {

    const { id } = req.params;

    const { name, email } = req.body;
    const user = await User.findOne({ where: { id } })

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found '
        })

    }

    await user.update({
        name,
        email
    });

    res.status(204).json({
        status: 'success'
    })


}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } })

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found '
        })

    }

    await user.update({ status: 'canceled' });
}

module.exports = { getAllUsers, createUsers, updateUser, deleteUser };