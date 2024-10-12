// archivo principal de rutas
import {Router} from "express";
import usersRouter from "./users.js";
import statesRouter from "./states.js";
import cyclesRouter from "./cycles.js";

const router = Router();

router.use("/users", usersRouter); // le estamos asignando la ruta /users a la ruta de usuarios
router.use("/states", statesRouter);
router.use("/cycles", cyclesRouter);

export default router;