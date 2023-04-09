import mongoose from "mongoose";


const PedidosSchema = new mongoose.Schema({
    entrada: { type: String },
    prato_principal: { type: String },
    bebida: { type: String },
    sobremesa: { type: String },
    isActive: { type: Boolean }


}, {
    timestamps: true
})

const Pedido = mongoose.model('Pedidos', PedidosSchema)

export default Pedido
