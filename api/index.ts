require("dotenv").config()

import express, { Express } from "express"
import cors from "cors"
import { connectDB } from "./database/Database"
import TestRoutes from "./routes/TestRoutes"
import AuthRoutes from "./routes/AuthRoutes"

const app: Express = express()
const port: number = Number(process.env.PORT) || 3000 

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api", TestRoutes)
app.use("/api", AuthRoutes)

app.listen(port, () => console.log(`SpendSmart API opened at ${port}`))