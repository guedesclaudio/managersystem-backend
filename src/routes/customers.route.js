import express from "express"
import { createCustomer, listCustomers, removeCustomer } from "../controllers/customers.controller.js"
import { checkAddress } from "../middlewares/customers.middleware.js"

const router = express.Router()

router.get("/customers", listCustomers)
router.post("/customers", checkAddress, createCustomer)
router.delete("/customers/:id", removeCustomer)

export default router