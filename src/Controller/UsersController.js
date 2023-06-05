import UserModel from '../Model/UserModel.js'

const insertUser = async (req, res) => {
    const user = req.body;
    const created = await UserModel.insertUser(user)
    if (created) {
        res.statusCode = 201
        res.send(created._id)
    }
    else {
        res.send(500)
    }
}

const getUsers = async (req, res) => {
    const find = await UserModel.getUsers(req.query.filter, req.query.skip, req.query.limit)
    if (find) {
        res.status(200).send(find)
    } else {
        res.status(500)
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id
    const userDeleted = await UserModel.deleteUser(id)
    if (userDeleted) {
        res.send(201)
        res.send(userDeleted._id)
    } else {
        res.send(500)
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id
    const update = { $set: req.body }
    const userUpdate = await UserModel.updateUser(id, update)
    if (userUpdate) {
        res.send(201)
        res.send(userUpdate._id)
    } else {
        res.send(500)
    }
}


export default {
    insertUser,
    deleteUser,
    updateUser,
    getUsers
}
