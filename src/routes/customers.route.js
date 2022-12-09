import express from "express"
import { createCustomer, listCustomers, removeCustomer } from "../controllers/customers.controller.js"

const router = express.Router()

router.get("/customers", listCustomers)
router.post("/customers", createCustomer)
router.delete("/customers/:id", removeCustomer)

export default router