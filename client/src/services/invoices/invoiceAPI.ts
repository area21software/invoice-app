import Invoice from "../../model/Invoice";

async function apiGetInvoices(): Promise<Invoice[]> {
  const response = await fetch("http://localhost:8000/v1/invoices");
  const invoiceJson = await response.json();
  return invoiceJson;
}

export { apiGetInvoices };
