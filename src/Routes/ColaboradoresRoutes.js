import { Router } from 'express'
import ColaboradoresController from '../Controller/ColaboradoresController.js';

const ColaboradorRoutes = Router();

ColaboradorRoutes.get('/', (req, res) => {
    return ColaboradoresController.getColaboradores(req, res)
})

ColaboradorRoutes.put('/', (req, res) => {
    return ColaboradoresController.insertColab(req, res)
})

ColaboradorRoutes.delete('/:id', (req, res) => {
    return ColaboradoresController.deleteColab(req, res)
})

ColaboradorRoutes.patch('/:id', (req, res) => {
    return ColaboradoresController.updateColab(req, res)
})

export default ColaboradorRoutes