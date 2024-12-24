import Updatedcomponent from "./Hoc";
import React, { useContext, useState } from "react";
import { Mycontext } from "../../App/App";
import { Link, NavLink } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { TfiAlignRight } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { TbLogin2 } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import Dgland_main_logo from "../Logo/dgland_main_logo";
import { RiShoppingBag2Line } from "react-icons/ri";
import { FiBookOpen } from "react-icons/fi";
import { CiShop } from "react-icons/ci";
import { MdMoreTime } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";

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
      <div className="sticky top-0 z-20 bg-white dark:bg-slate-800 dark:text-white" dir="rtl">
        {/* Progress Bar */}
        <div className="w-full bg-white dark:bg-slate-800">
          <div
            className="bg-red-600 dark:bg-gray-400 rounded-tl-xl rounded-bl-xl"
            style={{ width: `${scrolltop}%` }}
          ></div>
        </div>

        {/* Header Section */}
        <div className="md:mx-5 lg:mx-10 p-2">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Toggle */}
            <div className="flex w-full">
              <button
                className="text-black p-2 focus:outline-none sm:hidden"
                onClick={toggleMenu}
              >
                {!isOpen && (
                  <TfiAlignRight className="dark:bg-slate-800 text-[20px] font-extrabold text-red-500 dark:text-white" />
                )}
              </button>

              {/* Logo and Search Bar */}
              <div className="hidden sm:block w-1/3">
                <Dgland_main_logo />
              </div>
              <button
                type="text"
                className="p-2 bg-gray-200 text-gray-500 rounded-3xl mx-2 w-full flex items-center justify-between"
              >
                <div className="flex">
                  <CiSearch className="text-red-500 text-[28px] sm:bg-white rounded-full sm:p-1 sm:text-[32px] mx-1" />
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none"
                    placeholder="جستجو ..."
                  />
                </div>
                <div className="w-1/3 px-3 sm:hidden">
                  <Dgland_main_logo />
                </div>
              </button>
            </div>

            {/* User and Cart Links */}
            <div className="hidden sm:flex w-1/5">
              <Link className="text-red-500 flex justify-between items-center p-2 mx-1 border text-md border-gray-200 rounded-md">
                <TbLogin2 className="text-2xl mx-2" /> ورود
              </Link>
              <Link className="text-red-500 flex p-1 mx-1 border text-md border-gray-200 rounded-md justify-center items-center">
                <LuShoppingCart className="text-2xl" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex py-2 justify-between">
            <div className="flex gap-x-1">
              <NavLink
                to="/digiland"
                className={({ isActive }) =>`flex justify-center items-center text-gray-700 p-2 ${isActive
                ? "border border-gray-200 rounded-xl "
                : " duration-100 dark:text-white"
            }`}
                  
              >
                <CiShoppingTag className="text-2xl lg:text-3xl" /> دسته‌بندی کالاها
              </NavLink>
              <NavLink
                to="/digiland"
                className={({ isActive }) =>`flex justify-center items-center text-gray-700 p-2 ${isActive
                ? "border border-gray-200 rounded-xl "
                : " duration-100 dark:text-white"
            }`}
              >
                <MdMoreTime className="text-2xl lg:text-3xl" /> خرید اقساطی
              </NavLink>
              <NavLink
                to="/digiland"
                className={({ isActive }) =>`flex justify-center items-center text-gray-700 p-2 ${isActive
                ? "border border-gray-200 rounded-xl "
                : " duration-100 dark:text-white"
            }`}
              ><RiShoppingBag2Line className="text-2xl lg:text-3xl" /> پیشنهاد طلایی
              </NavLink>
              <NavLink
                to="/digiland"
                className={({ isActive }) =>`flex justify-center items-center text-gray-700 p-2 ${isActive
                ? "border border-gray-200 rounded-xl "
                : " duration-100 dark:text-white"
            }`}
              ><CiShop className="text-2xl lg:text-3xl" /> شعب دی‌جی‌لند
              </NavLink>
              <NavLink
                to="/digiland"
                className={({ isActive }) =>`flex justify-center items-center text-gray-700 p-2 ${isActive
                ? "border border-gray-200 rounded-xl "
                : " duration-100 dark:text-white"
            }`}
              ><FiBookOpen className="text-2xl lg:text-3xl" /> مجله دی‌جی‌لند
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
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              onClick={closeMenu}
            ></div>
            <div
              className={`fixed top-0 bg-white right-0 h-full w-64 shadow-lg transform z-20 transition-transform duration-300 ease-in-out sm:hidden ${
                isOpen ? "translate-x-0 animate-slideIn" : "translate-x-full"
              } `}
            >
              <ul className="p-4 dark:bg-slate-800 min-h-screen dark:text-white">
                <div className="flex justify-between dark:bg-slate-800 dark:text-white mb-4">
                  <div className="w-1/2">
                    <Dgland_main_logo />
                  </div>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-[30px] pb-3 text-gray-700 dark:text-white"
                  >
                    <IoMoon />
                  </button>
                </div>
                <li className="border-b border-gray-200 py-4">
                  <Link to="/digiland" onClick={closeMenu} className="flex items-center text-gray-600 text-xl">
                    <CiShoppingTag className="text-3xl text-red-500" /> دسته‌بندی کالاها
                  </Link>
                </li>
                <li className="border-b border-gray-200 py-4">
                  <Link to="/Products" onClick={closeMenu} className="flex items-center text-gray-600 text-xl">
                    <MdMoreTime className="text-3xl text-red-500" /> خرید اقساطی
                  </Link>
                </li>
                <li className="border-b border-gray-200 py-4">
                  <Link to="/Products" onClick={closeMenu} className="flex items-center text-gray-600 text-xl">
                    <RiShoppingBag2Line className="text-3xl text-red-500" /> پیشنهاد طلایی
                  </Link>
                </li>
                <li className="border-b border-gray-200 py-4">
                  <Link to="/Products" onClick={closeMenu} className="flex items-center text-gray-600 text-xl">
                    <CiShop className="text-3xl text-red-500" /> شعب دی‌جی‌لند
                  </Link>
                </li>
                <li className="py-4">
                  <Link to="/Contact" onClick={closeMenu} className="flex items-center text-gray-600 text-xl">
                    <FiBookOpen className="text-3xl text-red-500" /> مجله دی‌جی‌لند
                  </Link>
                  <div className="py-4">
                    <NavLink
                      onClick={closeMenu}
                      to="/User"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-red-600 dark:text-gray-100 text-[13px] mt-6 dark:bg-gray-400 my-1 py-1 px-2 text-white rounded-md duration-700"
                          : "bg-rose-600 text-white py-1 text-[13px] px-2 hover:bg-rose-800 duration-500 rounded-lg font-bold"
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
                          ? "bg-red-600 dark:text-gray-100 mt-6 text-[13px] dark:bg-gray-400 my-1 py-1 px-2 text-white rounded-md duration-700"
                          : "bg-rose-600 text-white text-[13px] py-1 px-2 dark:bg-gray-400 hover:bg-rose-800 duration-500 rounded-lg font-bold"
                      }
                    >
                      ثبت نام
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Updatedcomponent(Totalmenu);
