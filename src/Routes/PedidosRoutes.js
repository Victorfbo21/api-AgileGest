import { Router } from 'express'
import PedidosController from '../Controller/PedidosController.js';

const PedidosRouter = Router();

PedidosRouter.get('/', (req, res) => {
    return UsersController.getUsers(req, res)
})

PedidosRouter.put('/', (req, res) => {
    return PedidosController.insertPedido(req, res)
})

PedidosRouter.delete('/:id', (req, res) => {
    return UsersController.deleteUser(req, res)
})

PedidosRouter.patch('/:id', (req, res) => {
    return UsersController.updateUser(req, res)
})

export default PedidosRouter