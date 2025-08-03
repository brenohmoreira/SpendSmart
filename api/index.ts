require("dotenv").config()

import express, { Express } from "express"
import cors from "cors"
import testRoutes from "./routes/testRoutes"

const app: Express = express()
const port: number = Number(process.env.PORT) || 3000 

app.use(cors())
app.use(express.json())
app.use("/test", testRoutes)

app.listen(port, () => console.log(`SpendSmart API opened at ${port}`))