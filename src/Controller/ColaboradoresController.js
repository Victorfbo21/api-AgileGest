import UserModel from '../Model/UserModel.js'

const insertColab = async (req, res) => {
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

const deleteColab = async (req, res) => {
    const id = req.params.id
    const userDeleted = await UserModel.deleteUser(id)
    if (userDeleted) {
        res.send(201)
        res.send(userDeleted._id)
    } else {
        res.send(500)
    }
}

const updateColab = async (req, res) => {
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
    insertColab,
    deleteColab,
    updateColab
}
