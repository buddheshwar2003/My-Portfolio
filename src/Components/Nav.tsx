import { NavLink } from "react-router-dom";
import { navLinks } from "../Data";
import { LuMoon, LuSun } from "react-icons/lu";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const handleMobNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
  }, [theme]);

  return (
    <header className="w-full bg-white dark:bg-gray-900 transition-colors shadow-md duration-300 dark:shadow-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 max-container relative">
        {/* Logo */}
        <div className="border-2 p-2 rounded-full bg-gradient-to-r from-blue-700 to-red-700 text-white">
          <h1 className="text-2xl font-bold">BB</h1>
        </div>

        {/* Desktop Navbar */}
        <ul className="flex gap-10 items-start justify-center max-md:hidden">
          {navLinks.map((navbar, index) => (
            <li key={index}>
              <NavLink
                to={navbar.href}
                className={({ isActive }) =>
                  `text-xl relative group transition-all ${
                    isActive
                      ? `text-blue-500 dark:text-blue-400 font-bold `
                      : `text-gray-800 dark:text-gray-300`
                  }`
                }
              >
                {navbar.label}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-600 dark:bg-gray-300 transition-all duration-300 group-hover:w-[50%] group-active:w-full`}
                ></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Button */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handleTheme}
            className="rounded-full p-3 border-2 border-gray-400 dark:border-gray-800 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme ? (
              <LuSun className="text-yellow-400 text-2xl" />
            ) : (
              <LuMoon className="text-gray-400 text-2xl" />
            )}
          </button>

          <div
            className="max-md:block hidden cursor-pointer"
            onClick={handleMobNav}
          >
            <AiOutlineMenu className="text-3xl text-gray-800 dark:text-white" />
          </div>
        </div>
      </nav>

      <div
        className={` transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className=" flex absolute w-full z-[999] items-center justify-center flex-col gap-6 px-6 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
          {navLinks.map((navbar, index) => (
            <li key={index}>
              <NavLink
              onClick={handleMobNav}
                to={navbar.href}
                className={({ isActive }) =>
                  `text-xl block transition-all ${
                    isActive
                      ? "text-blue-500 dark:text-blue-400 font-bold"
                      : "text-gray-800 dark:text-gray-300"
                  }`
                }
              >
                {navbar.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
