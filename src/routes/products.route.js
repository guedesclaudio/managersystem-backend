import express from "express"
import { createProduct, removeProduct } from "../controllers/products.controller.js"
import { validateCreateProduct } from "../middlewares/products.middleware.js"
import { listProducts } from "../controllers/products.controller.js"
import { validateToken } from "../middlewares/token.middleware.js"

const router = express.Router()

router.get("/products", validateToken, listProducts)
router.post("/products", validateToken, validateCreateProduct, createProduct)
router.delete("/products/:id", validateToken, removeProduct)

export default router