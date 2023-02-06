import { useState } from "react";

import Sun from "../assets/svg/icon-sun.svg";
import Moon from "../assets/svg/icon-moon.svg";
import Logo from "../assets/svg/logo.svg";
import Avatar from "../assets/jpg/image-avatar.jpg";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkClassOnRoot();
  }

  function setDarkClassOnRoot() {
    const rootElement = document.getElementById("root");
    const classList = rootElement!.classList;

    if (classList[0] === "dark") {
      classList.remove("dark");
      setIsDarkMode(false);
    } else {
      classList.add("dark");
      setIsDarkMode(true);
    }
  }

  return (
    <>
      <div className="flex bg-ia-darkGrey-400 xl:hidden">
        <div className="flex h-20 w-20 items-center justify-center rounded-tr-2xl rounded-br-2xl bg-ia-purple-300">
          <img src={Logo} className="h-8 w-8" />
        </div>
        <div className="ml-auto flex items-center">
          <button className="mr-6 cursor-pointer" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <img src={Sun} className="h-6 w-6" />
            ) : (
              <img src={Moon} className="h-6 w-6" />
            )}
          </button>
          <div className="flex h-full items-center justify-center border-l-[1px] border-l-[#494E6E] py-5 px-6">
            <img src={Avatar} className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="relative hidden h-full w-[100px] rounded-tr-2xl rounded-br-2xl bg-ia-darkGrey-400 xl:block ">
        <div className="flex h-[100px] w-full items-center justify-center rounded-tr-2xl rounded-br-2xl bg-ia-purple-300">
          <img src={Logo} className="h-10 w-10" />
        </div>
        <div className="absolute bottom-0 flex flex-col items-center">
          <button className="cursor-pointer pb-8" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <img src={Sun} className="h-6 w-6" />
            ) : (
              <img src={Moon} className="h-6 w-6" />
            )}
          </button>
          <div className="border-t-[1px] border-t-[#494E6E] py-6 px-8">
            <img src={Avatar} className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
