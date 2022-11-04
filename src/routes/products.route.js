import express from "express"
//import { validatePostProducts } from "../middlewares/products.middleware.js"

const router = express.Router()

router.get("/products")
router.post("/products")

export default router