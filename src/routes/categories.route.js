import express from "express"
import { createCategory } from "../controllers/categories.controller.js"
import { validateCreateCategory } from "../middlewares/categories.middleware.js"

const router = express.Router()

router.get("/categories")
router.post("/categories", validateCreateCategory, createCategory)

export default router