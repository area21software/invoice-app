import Invoice from "../../model/Invoice";
import InvoiceCard from "./InvoiceCard";

type InvoiceListProps = {
  invoices: Invoice[];
};

const InvoiceList = ({ invoices }: InvoiceListProps) => {
  return (
    <div className="mt-8">
      {invoices.map((invoice) => (
        <InvoiceCard invoice={invoice} />
      ))}
    </div>
  );
};

export default InvoiceList;
