import Empty from "../../assets/svg/illustration-empty.svg";

const EmptyInvoices = () => {
  return (
    <div className="mt-20 flex flex-col  items-center dark:text-white">
      <img className="max-w-full" src={Empty} />
      <h2 className="mt-10 text-center text-2xl font-bold">
        There is nothing here
      </h2>
      <p className="mt-6 max-w-[250px] text-center text-sm">
        Create an invoice by clicking the <b>New</b> button and get started
      </p>
    </div>
  );
};

export default EmptyInvoices;
