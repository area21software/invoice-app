import express from "express"
import cors from "cors"
import morgan from "morgan"

import apiV1 from "./routes/v1-api"

const app = express()

app.use(
  cors({
    origin: "http://localhost:1234",
  })
)
app.use(morgan("combined"))

app.use(express.json())

app.use("/v1", apiV1)

app.get("/", (req, res) => {
  res.send("Hello from server")
})

export default app
