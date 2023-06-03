import mongoose from "mongoose";


const ColaboradorSchema = new mongoose.Schema({
    nome: { type: String },
    telefone: { type: String },
    email: { type: String },
    dataNascimento: { type: String },
    funcao: { type: String },
    isActive: { type: Boolean }


}, {
    timestamps: true
})

const Colaborador = mongoose.model('Colaborador', ColaboradorSchema)

export default Colaborador
