import express from "express"
import { httpGetInvoices } from "../../controller/invoices/invoices.controller"

const invoiceRouter = express.Router()

invoiceRouter.get("/", httpGetInvoices)

export default invoiceRouter
