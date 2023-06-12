import ClientesModel from "../Model/ClientesModel.js";

const insertCliente = async (req, res) => {
    const cliente = req.body;
    const created = await ClientesModel.insertCliente(cliente)
    if (created) {
        res.statusCode = 201
        res.send(created)
    }
    else {
        res.send(500)
    }
}

const getCliente = async (req, res) => {
    const find = await ClientesModel.getCliente(req.query.filter, req.query.skip, req.query.limit)
    if (find) {
        res.status(200).send(find)
    } else {
        res.status(500)
    }
}

const deleteCliente = async (req, res) => {
    const id = req.params.id
    const colabDeleted = await ClientesModel.deleteCliente(id)
    if (colabDeleted) {
        res.send(201)
        res.send(colabDeleted._id)
    } else {
        res.send(500)
    }
}

const updateCliente = async (req, res) => {
    const id = req.params.id
    const update = { $set: req.body }
    const colabUpdate = await ClientesModel.updateCliente(id, update)
    if (colabUpdate) {
        res.send(201)
        res.send(colabUpdate._id)
    } else {
        res.send(500)
    }
}


export default {
    insertCliente,
    deleteCliente,
    updateCliente,
    getCliente
}
