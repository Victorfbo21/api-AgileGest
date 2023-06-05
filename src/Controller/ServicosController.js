import ServicosModel from "../Model/ServicosModel.js";

const insertServico = async (req, res) => {
    const servico = req.body;
    const created = await ServicosModel.insertServico(servico)
    if (created) {
        res.statusCode = 201
        res.send(created._id)
    }
    else {
        res.send(500)
    }
}

const getServico = async (req, res) => {
    const find = await ServicosModel.getServico(req.query.filter, req.query.skip, req.query.limit)
    if (find) {
        res.status(200).send(find)
    } else {
        res.status(500)
    }
}

const deleteServico = async (req, res) => {
    const id = req.params.id
    const Deleted = await ServicosModel.deleteServico(id)
    if (Deleted) {
        res.send(201)
        res.send(Deleted._id)
    } else {
        res.send(500)
    }
}

const updateServico = async (req, res) => {
    const id = req.params.id
    const update = { $set: req.body }
    const Update = await ServicosModel.updateServico(id, update)
    if (Update) {
        res.send(201)
        res.send(Update._id)
    } else {
        res.send(500)
    }
}


export default {
    insertServico,
    deleteServico,
    updateServico,
    getServico
}
