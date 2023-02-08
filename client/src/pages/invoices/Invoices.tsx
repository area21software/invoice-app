import { useState, useEffect } from "react";
import { InvoiceHeader, InvoiceList } from "../../components/invoices";
import { apiGetInvoices } from "../../services/invoices/invoiceAPI";
import Invoice from "../../model/Invoice";

const Invoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    async function getInvoices(): Promise<void> {
      const invoiceData: Invoice[] = await apiGetInvoices();
      setInvoices(invoiceData);
    }
    getInvoices();
  }, []);

  // TODO: Make api call to return data
  //
  return (
    <div className="mt-8 max-w-[1300px] px-6 xl:mx-auto xl:mt-16 xl:w-full">
      <InvoiceHeader />
      <InvoiceList invoices={invoices} />
    </div>
  );
};

export default Invoices;
