import { Router } from "express";
import { AllUsers, usersByRole } from "../controllers/users/read.js";

const router = Router();

// endpoint que trae todos los usuarios
router.get("/all", AllUsers)
// endpoint que trae los usuarios por rol
router.get("/role/:x", usersByRole)
// el dos puntos le estamos diciendo al usuario que le envie el parametro x


export default router;
