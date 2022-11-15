import express from "express"
import { createCategory, listCategories } from "../controllers/categories.controller.js"
import { validateCreateCategory } from "../middlewares/categories.middleware.js"
import { validateToken } from "../middlewares/token.middleware.js"

const router = express.Router()

router.get("/categories", validateToken, listCategories)
router.post("/categories", validateToken, validateCreateCategory, createCategory)

export default router