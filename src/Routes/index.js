import { Router } from "express";
import UserRouter from './UserRoutes.js'
import ColaboradorRoutes from "./ColaboradoresRoutes.js";
import AtendimentoRoutes from "./AtendimentosRoutes.js";

const Routers = Router();

Routers.use('/users', UserRouter)
Routers.use('/colab', ColaboradorRoutes)
Routers.use('/atendimento', AtendimentoRoutes)

export default Routers