import { Router } from 'express'
import ServicosController from '../Controller/ServicosController.js';

const ServicosRoutes = Router();

ServicosRoutes.get('/', (req, res) => {
    return ServicosController.getServico(req, res)
})

ServicosRoutes.put('/', (req, res) => {
    return ServicosController.insertServico(req, res)
})

ServicosRoutes.delete('/:id', (req, res) => {
    return ServicosController.deleteServico(req, res)
})

ServicosRoutes.patch('/:id', (req, res) => {
    return ServicosController.updateServico(req, res)
})

export default ServicosRoutes