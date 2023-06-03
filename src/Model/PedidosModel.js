import PedidosSchema from "../Schemas/PedidosSchema.js";

const insertPedido = (pedido) => {
    const pedidoCreated = new PedidosSchema({ ...pedido })
    return pedidoCreated.save().then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error on Pedido Inserted', e)
            return null
        }
    )
}

export default {
    insertPedido

}