import express from "express"
import { createProduct } from "../controllers/products.controller"
import { validateCreateProduct } from "../middlewares/products.middleware.js"
import { listProducts } from "../controllers/products.controller"

const router = express.Router()

router.get("/products", listProducts)
router.post("/products", validateCreateProduct, createProduct)

export default router