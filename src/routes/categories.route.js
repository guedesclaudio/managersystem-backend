import express from "express"
import { createCategory, listCategories, removeCategory } from "../controllers/categories.controller.js"
import { validateCreateCategory } from "../middlewares/categories.middleware.js"
import { validateToken } from "../middlewares/token.middleware.js"

const router = express.Router()

router.get("/categories", validateToken, listCategories)
router.post("/categories", validateToken, validateCreateCategory, createCategory)
router.delete("/categories/:id", validateToken, removeCategory)

export default router