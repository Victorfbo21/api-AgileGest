import mongoose from "mongoose";


const AtendimentosSchema = new mongoose.Schema({
    nomeCliente: { type: String, ref: "Cliente" },
    servico: { type: String, ref: "Servico" },
    colaborador: { type: String, ref: "Colaborador" },
    initialHour: { type: String },
    finalHour: { type: String },
    isActive: { type: Boolean }


}, {
    timestamps: true
})

const Atendimento = mongoose.model('Atendimento', AtendimentosSchema)

export default Atendimento

