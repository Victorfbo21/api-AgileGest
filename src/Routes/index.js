import { Router } from "express";
import UserRouter from './UserRoutes.js'
import PedidosRouter from "./PedidosRoutes.js";

const Routers = Router();

Routers.use('/users', UserRouter)

Routers.use('/pedidos', PedidosRouter)


export default Routers