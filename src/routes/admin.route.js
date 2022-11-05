import express from "express"
import { createSession } from "../controllers/admin.controller.js"
import { validateSignin } from "../middlewares/admin.middleware.js"

const router = express.Router()

router.post("/signin", validateSignin, createSession)

export default router