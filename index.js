import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const server = express()

server
    .use(cors())
    .use(express.json())

server.get("/status", (req, res) => {
    res.send("server it's on")
})

server.listen(4000, () => console.log(`Server listen on PORT 4000`))