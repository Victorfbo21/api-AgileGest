import mongoose from "mongoose";


const ClienteSchema = new mongoose.Schema({
    nome: { type: String },
    telefone: { type: String },
    email: { type: String },
    dataNascimento: { type: String },
    isActive: { type: Boolean }


}, {
    timestamps: true
})

const Cliente = mongoose.model('Cliente', ClienteSchema)

export default Cliente
