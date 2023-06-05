import { Router } from 'express'
import AtendimentosController from '../Controller/AtendimentosController.js';

const AtendimentoRoutes = Router();

AtendimentoRoutes.get('/', (req, res) => {
    return AtendimentosController.getAtendimento(req, res)
})

AtendimentoRoutes.put('/', (req, res) => {
    return AtendimentosController.insertAtendimento(req, res)
})

AtendimentoRoutes.delete('/:id', (req, res) => {
    return AtendimentosController.deleteAtendimento(req, res)
})

AtendimentoRoutes.patch('/:id', (req, res) => {
    return AtendimentosController.updateAtendimento(req, res)
})

export default AtendimentoRoutes