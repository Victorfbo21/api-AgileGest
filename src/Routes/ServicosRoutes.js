import { Router } from 'express'
import ServicosController from '../Controller/ServicosController.js';

const ServicosRoutes = Router();

ServicosRoutes.get('/list', (req, res) => {
    return ServicosController.getServico(req, res)
})

ServicosRoutes.put('/create', (req, res) => {
    return ServicosController.insertServico(req, res)
})

ServicosRoutes.delete('/delete/:id', (req, res) => {
    return ServicosController.deleteServico(req, res)
})

ServicosRoutes.patch('/update/:id', (req, res) => {
    return ServicosController.updateServico(req, res)
})

export default ServicosRoutes