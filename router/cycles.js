import { Router } from "express";
import Cycle  from "../models/Cycle.js";

const router = Router();

// endpoint
router.get("/all", async (request, response) => {
  try {
    let all = await Cycle.find(); 
    return response.status(200).json({ response: all });
  } catch (error) {
    return response.status(500).json({ response: error });
  }
});
export default router;
