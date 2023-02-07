import ArrowDown from "../../assets/svg/icon-arrow-down.svg";
import Plus from "../../assets/svg/icon-plus.svg";

const InvoiceHeader = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold dark:text-white">Invoices</h1>
        <p className="text-sm font-thin dark:text-ia-blueGrey-600 ">
          7 invoices
        </p>
      </div>

      <button className="ml-auto mr-4 flex items-center">
        <p className="mr-3 text-sm font-bold dark:text-white">Filter</p>
        <img src={ArrowDown} className="h-2 w-3" />
      </button>

      <button className="relative h-[44px] w-[90px] rounded-full bg-ia-purple-300">
        <div className="flex items-center justify-around">
          <img src={Plus} className="rounded-full bg-white p-2" />
          <p className="text-sm font-bold text-white">New</p>
        </div>
      </button>
    </div>
  );
};

export default InvoiceHeader;
