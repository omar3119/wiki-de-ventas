import React, { useState, useEffect } from "react";
import { use } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  function changeTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }
  return (
    <header className="w-full dark:bg-[#131b21] dark:text-white flex justify-center border-b-[2px] dark:border-b-[1px] dark:border-gray-500">
      <div className="w-full max-w-[1024px] flex items-center justify-between py-4 px-6">
        <h1 className="text-3xl font-bold text-center ">Wiki Search</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-lg font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {theme === "light" ? (
          <FaSun className="cursor-pointer" onClick={changeTheme} />
        ) : (
          <FaMoon className="cursor-pointer" onClick={changeTheme} />
        )}
      </div>
    </header>
  );
}

export default Header;
