import { Router } from 'express'
import AtendimentosController from '../Controller/AtendimentosController';

const AtendimentoRoutes = Router();

AtendimentoRoutes.get('/', (req, res) => {
    return AtendimentosController.getUsers(req, res)
})

AtendimentoRoutes.put('/', (req, res) => {
    return AtendimentosController.insertColab(req, res)
})

AtendimentoRoutes.delete('/:id', (req, res) => {
    return AtendimentosController.deleteColab(req, res)
})

AtendimentoRoutes.patch('/:id', (req, res) => {
    return AtendimentosController.updateColab(req, res)
})

export default AtendimentoRoutes