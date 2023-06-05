import AtendimentosModel from "../Model/AtendimentosModel.js";

const insertAtendimento = async (req, res) => {
    const user = req.body;
    const created = await AtendimentosModel.insertAtendimento(user)
    if (created) {
        res.statusCode = 201
        res.send(created._id)
    }
    else {
        res.send(500)
    }
}

const getAtendimento = async (req, res) => {
    const find = await AtendimentosModel.getAtendimento(req.query.filter, req.query.skip, req.query.limit)
    if (find) {
        res.status(200).send(find)
    } else {
        res.status(500)
    }
}

const deleteAtendimento = async (req, res) => {
    const id = req.params.id
    const Deleted = await AtendimentosModel.deleteAtendimento(id)
    if (Deleted) {
        res.send(201)
        res.send(Deleted._id)
    } else {
        res.send(500)
    }
}

const updateAtendimento = async (req, res) => {
    const id = req.params.id
    const update = { $set: req.body }
    const Update = await AtendimentosModel.updateAtendimento(id, update)
    if (Update) {
        res.send(201)
        res.send(Update._id)
    } else {
        res.send(500)
    }
}


export default {
    insertAtendimento,
    deleteAtendimento,
    updateAtendimento,
    getAtendimento
}
