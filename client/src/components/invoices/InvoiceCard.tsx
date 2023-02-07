import Invoice from "../../model/Invoice";

type InvoiceCardProps = {
  invoice: Invoice;
};

const InvoiceCard = ({ invoice }: InvoiceCardProps) => {
  function handleStatus() {
    switch (invoice.status) {
      case "Paid":
        return (
          <div className="flex h-10 w-24 items-center justify-center rounded-lg bg-green-500/20 text-sm font-bold text-green-500">
            <p className="text-lg font-bold">
              <span className="mr-1 text-2xl">•</span>
              {invoice.status}
            </p>
          </div>
        );
      case "Pending":
        return (
          <div className="flex h-10 w-24 items-center justify-center rounded-lg bg-orange-500/20 text-orange-500">
            <p className="text-lg font-bold">
              <span className="mr-1 text-2xl">•</span>
              {invoice.status}
            </p>
          </div>
        );
      default:
        return <></>;
    }
  }

  return (
    <div className="mb-4 flex h-36 w-full flex-col justify-between bg-white p-6 dark:bg-ia-darkGrey-400 dark:text-white sm:h-20 sm:flex-row sm:items-center sm:justify-evenly">
      <div className="flex justify-between sm:flex-grow sm:justify-around">
        <p className="text-sm font-bold">
          <span className="text-sm font-normal text-ia-blueGrey-600">#</span>
          {invoice.id}
        </p>
        <p className="text-sm font-thin">{invoice.clientName}</p>
      </div>

      <div className="sm: flex justify-between sm:flex-grow sm:justify-around">
        <div className="flex flex-col sm:flex-grow sm:flex-row sm:items-center sm:justify-evenly">
          <p className="text-sm dark:text-ia-blueGrey-400">
            Due {invoice.paymentDue}
          </p>
          <p className="text-lg font-bold dark:text-white">${invoice.total}</p>
        </div>
        {handleStatus()}
      </div>
    </div>
  );
};

export default InvoiceCard;
