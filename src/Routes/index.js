import { Router } from "express";
import UserRouter from './UserRoutes.js'
import ColaboradorRoutes from "./ColaboradoresRoutes.js";

const Routers = Router();

Routers.use('/users', UserRouter)
Routers.use('/colab', ColaboradorRoutes)


export default Routers