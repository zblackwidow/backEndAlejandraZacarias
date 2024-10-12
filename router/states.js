import { Router } from "express";
import AllStates from "../controllers/States/read.js";

const router = Router();

// endpoint
router.get("/all", AllStates)
export default router;
