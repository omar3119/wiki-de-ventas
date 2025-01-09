import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
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
  const navMenu = ["Home", "Wiki", "Contact","Login"];
  return (
    <header className="w-full dark:bg-[#131b21] dark:text-white flex justify-center border-b-[2px] dark:border-b-[1px] dark:border-gray-500 relative">
      <div className="w-full max-w-[1024px] flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold text-center underline md:text-3xl">
          Wiki
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {navMenu.map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-semibold text-blue-400 underline"
                      : "text-lg font-semibold"
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
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
