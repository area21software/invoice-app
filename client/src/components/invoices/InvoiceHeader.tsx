import ArrowDown from "../../assets/svg/icon-arrow-down.svg";
import Plus from "../../assets/svg/icon-plus.svg";
import Invoice from "../../model/Invoice";

type InvoiceHeaderProps = {
  invoices: Invoice[];
};

const InvoiceHeader = ({ invoices }: InvoiceHeaderProps) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold dark:text-white">Invoices</h1>
        <p className="text-sm font-thin dark:text-ia-blueGrey-600 ">
          {invoices.length} invoices
        </p>
      </div>

      <button className="ml-auto mr-4 flex items-center text-sm font-bold dark:text-white">
        <p className="mr-3 sm:mr-1">Filter</p>
        <span className="mr-2 hidden sm:inline">by status</span>
        <img src={ArrowDown} className="h-2 w-3" />
      </button>

      <button className="relative h-[44px] w-[90px] rounded-full bg-ia-purple-300 text-sm font-bold text-white sm:h-[48px] sm:w-36">
        <div className="flex items-center justify-around sm:justify-center">
          <img src={Plus} className="ml-1 rounded-full bg-white p-2 sm:mr-4" />
          <p className="mr-3 text-sm font-bold sm:mr-1">New</p>
          <span className="hidden sm:mr-2 sm:inline">Invoice</span>
        </div>
      </button>
    </div>
  );
};

export default InvoiceHeader;
