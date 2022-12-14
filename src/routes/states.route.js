import express from "express";
import { getStates } from "../controllers/states.controller.js";

const router = express.Router();

router.get("/states", getStates);

export default router;