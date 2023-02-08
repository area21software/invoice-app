import express from "express"

import invoicesRouter from "./invoices/invoices.router"

const api = express.Router()

api.use("/invoices", invoicesRouter)

export default api
