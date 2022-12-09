import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AdminRoute from "./src/routes/admin.route.js";
import CategoriesRoute from "./src/routes/categories.route.js";
import ProductsRoute from "./src/routes/products.route.js";
import CustomersRoute from "./src/routes/customers.route.js";
dotenv.config();

const server = express();
const PORT = process.env.PORT;

server
    .use(cors())
    .use(express.json())
    .use(AdminRoute)
    .use(CategoriesRoute)
    .use(ProductsRoute)
    .use(CustomersRoute);

server.get("/status", async (req, res) => {

    res.send("server it's on");
})

server.listen(PORT, () => console.log(`Server listen on PORT ${PORT}`));