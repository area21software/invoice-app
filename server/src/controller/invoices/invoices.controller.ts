import { Request, Response } from "express"
import { Invoice } from "../../model/invoices/invoice.model"

function httpGetInvoices(req: Request, res: Response) {
  return res.status(200).json(Invoice.getInvoices())
}

export { httpGetInvoices }
