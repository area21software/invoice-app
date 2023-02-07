import { Route, Routes, Outlet } from "react-router-dom";
import Header from "./layouts/Header";
import Invoices from "./pages/invoices/Invoices";

const App = () => {
  return (
    <div className="flex h-screen flex-col bg-ia-grey-100 dark:bg-ia-darkGrey-900 xl:flex-row">
      <Header />
      <Routes>
        <Route path="/" element={<Invoices />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;
