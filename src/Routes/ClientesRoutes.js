import { Router } from 'express'
import ClientesController from '../Controller/ClientesController.js';
const ClienteRoutes = Router();

ClienteRoutes.get('/', (req, res) => {
    return ClientesController.getCliente(req, res)
})

ClienteRoutes.put('/', (req, res) => {
    return ClientesController.insertCliente(req, res)
})

ClienteRoutes.delete('/delete/:id', (req, res) => {
    return ClientesController.deleteCliente(req, res)
})

ClienteRoutes.patch('/update/:id', (req, res) => {
    return ClientesController.updateCliente(req, res)
})

export default ClienteRoutes