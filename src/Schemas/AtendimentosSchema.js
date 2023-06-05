import mongoose from "mongoose";


const AtendimentosSchema = new mongoose.Schema({
    nomeCliente: { type: String, ref: "Cliente" },
    servico: { type: String },
    colaborador: { type: String, ref: "Colaborador" },
    emAndamento: { type: Boolean },
    isActive: { type: Boolean }


}, {
    timestamps: true
})

const Atendimento = mongoose.model('Atendimento', AtendimentosSchema)

export default Atendimento

