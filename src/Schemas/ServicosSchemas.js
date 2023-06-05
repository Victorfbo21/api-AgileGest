import mongoose from "mongoose";


const ServicosSchema = new mongoose.Schema({
    nomeServico: { type: String },
    valor: { type: Number },
    tempoMedio: { type: String },
    isActive: { type: Boolean }


}, {
    timestamps: true
})

const Servico = mongoose.model('Servico', ServicosSchema)

export default Servico

