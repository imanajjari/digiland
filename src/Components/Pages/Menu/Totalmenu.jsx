import Updatedcomponent from "./Hoc";
import React, { useContext, useState } from "react";
import { Mycontext } from "../../App/App";
import { Link, NavLink } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { TfiAlignRight } from "react-icons/tfi";
import { IoMdCloseCircle } from "react-icons/io";
const Totalmenu = ({ scrolltop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(Mycontext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="sticky top-0 z-20 bg-gray-300 dark:bg-slate-800 dark:text-white"
        dir="rtl"
      >
        <div className="bg-gray-300 dark:bg-slate-800 w-[100%] top-[100px] h-[10px]">
          <div
            className="bg-red-600 dark:bg-gray-400 rounded-tl-xl rounded-bl-xl  top-[100px] h-[10px]"
            style={{ width: `${scrolltop}%` }}
          ></div>
        </div>

        <button
          className="text-black p-3 focus:outline-none sm:hidden"
          onClick={toggleMenu}
        >
          {!isOpen ? (
            <TfiAlignRight className="dark:bg-slate-800 text-[28px] font-extrabold dark:text-white" />
          ) : null}
        </button>

        <div className="hidden sm:flex py-2 sm:justify-between">
          <div className="flex mr-3 gap-x-[40px]">
            <NavLink
              to="/digiland"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-600 dark:bg-gray-400 my-1 dark:text-gray-700 pt-1 px-1 text-white rounded-md duration-700"
                  : "text-rose-600 pt-2 px-1 duration-100 dark:text-white"
              }
            >
              دی جی لند
            </NavLink>
            <NavLink
              to="/Products"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-600 dark:bg-gray-400 my-1 dark:text-gray-700 pt-1 px-1 text-white rounded-md duration-700"
                  : "text-rose-600 pt-2 px-1 duration-100 dark:text-white"
              }
            >
              محصولات
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-600 dark:bg-gray-400 my-1 dark:text-gray-700 pt-1 px-1 text-white rounded-md duration-700"
                  : "text-rose-600 pt-2 px-1 duration-100 dark:text-white"
              }
            >
              ارتباط با ما
            </NavLink>
          </div>
          <div className="flex justify-between gap-x-2">
            <NavLink
              to="/User"
              className={({ isActive }) =>
                isActive
                  ? "bg-rose-600 hover:bg-rose-800 text-[13px] font-black dark:bg-gray-400  dark:text-gray-100 px-2 pt-2  text-white rounded-md duration-700"
                  : "bg-rose-600 text-[14px]  dark:bg-gray-300 dark:text-gray-500 text-white pt-2 px-2 hover:bg-rose-800 duration-500   rounded-lg font-bold"
              }
            >
              پنل شخصی کاربر
            </NavLink>
            <NavLink
              to="/login"
            
              className={({ isActive }) =>
                isActive
                  ? "bg-rose-600 font-black dark:bg-gray-400 my-1 text-[13px] pt-2 dark:text-gray-100 py-1 px-2  text-white rounded-md duration-700"
                  : "bg-rose-600  dark:bg-gray-300 text-[13px] dark:text-gray-500 pt-2 text-white py-1 px-2 hover:bg-rose-800 duration-500   rounded-lg font-bold"
              }
            >
              ثبت نام
            </NavLink>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-[30px] outline-none text-gray-700 dark:text-white ml-2 rounded-full bg-gray-400 p-1"
            >
              <IoMoon />
            </button>
          </div>
        </div>

        <div
          className={`fixed top-0 bg-gray-300 right-0 h-full w-64 shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <ul className="p-4 dark:bg-slate-800 min-h-screen dark:text-white">
            <div className="flex justify-between dark:bg-slate-800 dark:text-white">
              <IoMdCloseCircle
                onClick={toggleMenu}
                className="dark:bg-slate-800 mb-4 dark:text-white text-gray-700 text-[40px] font-extrabold"
              />
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-[30px] pb-3 text-gray-700 dark:text-white"
              >
                <IoMoon />
              </button>
            </div>
            <li className="mb-4">
              <Link to="/digiland" onClick={closeMenu}>
                دی جی لند
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/Products" onClick={closeMenu}>
                محصولات
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/Contact" onClick={closeMenu}>
                ارتباط با ما
              </Link>
              <br />
              <br />
              <div>
                <NavLink
                  onClick={closeMenu}
                  to="/User"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-600 dark:text-gray-100 tetx-[13px] mt-6 dark:bg-gray-400 my-1  py-1 px-2  text-white rounded-md duration-700"
                      : "bg-rose-600 text-white py-1 tetx-[13px] px-2 hover:bg-rose-800 duration-500   rounded-lg font-bold"
                  }
                >
                  پنل شخصی کاربر
                </NavLink>
                <br />
                <br />
                <NavLink
                  onClick={closeMenu}
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-600 dark:text-gray-100 mt-6 tetx-[13px] dark:bg-gray-400 my-1  py-1 px-2  text-white rounded-md duration-700"
                      : "bg-rose-600 text-white tetx-[13px] py-1 px-2 dark:bg-gray-400 hover:bg-rose-800 duration-500   rounded-lg font-bold"
                  }
                >
                  ثبت نام
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Updatedcomponent(Totalmenu);
