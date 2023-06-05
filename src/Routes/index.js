import { Router } from "express";
import UserRouter from './UserRoutes.js'
import ColaboradorRoutes from "./ColaboradoresRoutes.js";
import AtendimentoRoutes from "./AtendimentosRoutes.js";
import ServicosRoutes from "./ServicosRoutes.js";
import AuthRouter from "./AuthRoutes.js";

const Routers = Router();

Routers.use('/', AuthRouter)
Routers.use('/users', UserRouter)
Routers.use('/colab', ColaboradorRoutes)
Routers.use('/atendimento', AtendimentoRoutes)
Routers.use('/servico', ServicosRoutes)



export default Routers