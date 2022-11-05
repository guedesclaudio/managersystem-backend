import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import AdminRoute from "./src/routes/admin.route.js"
import CategoriesRoute from "./src/routes/categories.route.js"
import ProductsRoute from "./src/routes/products.route.js"

const server = express()

server
    .use(cors())
    .use(express.json())
    .use(AdminRoute)
    .use(CategoriesRoute)
    .use(ProductsRoute)

server.get("/status", (req, res) => {
    res.send("server it's on")
})

server.listen(4000, () => console.log(`Server listen on PORT 4000`))