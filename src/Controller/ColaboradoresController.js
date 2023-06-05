import ColaboradoresModel from "../Model/ColaboradoresModel.js";

const insertColab = async (req, res) => {
    const user = req.body;
    const created = await ColaboradoresModel.insertColab(user)
    if (created) {
        res.statusCode = 201
        res.send(created._id)
    }
    else {
        res.send(500)
    }
}

const getColaboradores = async (req, res) => {
    const find = await ColaboradoresModel.getColaboradores(req.query.filter, req.query.skip, req.query.limit)
    if (find) {
        res.status(200).send(find)
    } else {
        res.status(500)
    }
}

const deleteColab = async (req, res) => {
    const id = req.params.id
    const colabDeleted = await ColaboradoresModel.deleteColab(id)
    if (colabDeleted) {
        res.send(201)
        res.send(colabDeleted._id)
    } else {
        res.send(500)
    }
}

const updateColab = async (req, res) => {
    const id = req.params.id
    const update = { $set: req.body }
    const colabUpdate = await ColaboradoresModel.updateColab(id, update)
    if (colabUpdate) {
        res.send(201)
        res.send(colabUpdate._id)
    } else {
        res.send(500)
    }
}


export default {
    insertColab,
    deleteColab,
    updateColab,
    getColaboradores
}
