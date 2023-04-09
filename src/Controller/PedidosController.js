import PedidosModel from "../Model/PedidosModel.js";

const insertPedido = async (req, res) => {
    const pedido = req.body;
    const created = await PedidosModel.insertPedido(pedido)
    if (created) {
        res.statusCode = 201
        res.send(created._id)
    }
    else {
        res.send(500)
    }
}


export default {
    insertPedido
}