import express from "express"
import { createCustomer, listCustomers, removeCustomer } from "../controllers/customers.controller.js"
import { checkAddress, checkEmailAndCpf } from "../middlewares/customers.middleware.js"
import { validateToken } from "../middlewares/token.middleware.js"

const router = express.Router()

router.get("/customers", validateToken, listCustomers) 
router.post("/customers", validateToken, checkEmailAndCpf, checkAddress, createCustomer)
router.delete("/customers/:customerId", validateToken, removeCustomer)

export default router