import express from "express"
import { validateSignin } from "../middlewares/admin.middleware.js"

const router = express.Router()

router.post("/signin", validateSignin)

export default router