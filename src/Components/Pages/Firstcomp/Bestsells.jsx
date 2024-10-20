import React from "react";

export default function Bestsells() {
  return (
    <>
      <div className="dark:bg-slate-700 bg-red-600  dark:text-white">
        <h1 className="text-center pt-4 text-white text-[22px]">پر فروش ترین ها</h1>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          <div className=" bg-white rounded-xl  duration-1000  transform origin-top hover:rotate-3 transition-transform ">
            <img
              src={require("../Images/bestsells/1.gif")}
              className="p-3 rounded-lg"
            />
            <p className=" dark:text-slate-800 text-end mx-3 pb-1 my-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex justify-between mx-4">
              <div
                className="  pb-1 font- text-gray-600 line-through"
                style={{ textDecorationThickness: "1.2px" }}
              >
                11.000.000
              </div>
              <button className="bg-red-600 dark:bg-blue-600 text-white p-1 rounded-full">
                6%
              </button>
            </div>
            <p
              className="text-end dark:text-blue-700 pl-4 pb-3 text-[20px] font-bold text-red-600"
              dir="rtl"
            >
              10.370.000 تومان
            </p>
          </div>
          <div className=" bg-white rounded-xl  duration-1000  transform origin-top hover:rotate-3 transition-transform ">
            <img
              src={require("../Images/bestsells/2.gif")}
              className="p-3 rounded-lg"
            />
            <p className="dark:text-slate-800 text-end mx-3 pb-1 my-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex justify-between mx-4">
              <div
                className="  pb-1 font- text-gray-600 line-through"
                style={{ textDecorationThickness: "1.2px" }}
              >
                11.000.000
              </div>
              <button className="bg-red-600 dark:bg-blue-600 text-white p-1 rounded-full">
                6%
              </button>
            </div>
            <p
              className="text-end dark:text-blue-700 pl-4 pb-3 text-[20px] font-bold text-red-600"
              dir="rtl"
            >
              10.370.000 تومان
            </p>
          </div>
          <div className=" bg-white rounded-xl  duration-1000  transform origin-top hover:rotate-3 transition-transform ">
            <img
              src={require("../Images/bestsells/3.gif")}
              className="p-3 rounded-lg"
            />
            <p className="dark:text-slate-800 text-end mx-3 pb-1 my-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex justify-between mx-4">
              <div
                className="  pb-1 font- text-gray-600 line-through"
                style={{ textDecorationThickness: "1.2px" }}
              >
                11.000.000
              </div>
              <button className="bg-red-600 dark:bg-blue-600 text-white p-1 rounded-full">
                6%
              </button>
            </div>
            <p
              className="text-end dark:text-blue-700 pl-4 pb-3 text-[20px] font-bold text-red-600"
              dir="rtl"
            >
              10.370.000 تومان
            </p>
          </div>
          <div className=" bg-white rounded-xl  duration-1000  transform origin-top hover:rotate-3 transition-transform ">
            <img
              src={require("../Images/bestsells/4.jpeg")}
              className="p-3 rounded-lg"
            />
            <p className="dark:text-slate-800 text-end mx-3 pb-1 my-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex justify-between mx-4">
              <div
                className="  pb-1 font- text-gray-600 line-through"
                style={{ textDecorationThickness: "1.2px" }}
              >
                11.000.000
              </div>
              <button className="bg-red-600 dark:bg-blue-600 text-white p-1 rounded-full">
                6%
              </button>
            </div>
            <p
              className="text-end dark:text-blue-700 pl-4 pb-3 text-[20px] font-bold text-red-600"
              dir="rtl"
            >
              10.370.000 تومان
            </p>
          </div>
          <div className=" bg-white rounded-xl  duration-1000  transform origin-top hover:rotate-3 transition-transform ">
            <img
              src={require("../Images/bestsells/5.jpeg")}
              className="p-3 rounded-lg"
            />
            <p className="dark:text-slate-800 text-end mx-3 pb-1 my-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex justify-between mx-4">
              <div
                className="  pb-1 font- text-gray-600 line-through"
                style={{ textDecorationThickness: "1.2px" }}
              >
                11.000.000
              </div>
              <button className="bg-red-600 dark:bg-blue-600 text-white p-1 rounded-full">
                6%
              </button>
            </div>
            <p
              className="text-end dark:text-blue-700 pl-4 pb-3 text-[20px] font-bold text-red-600"
              dir="rtl"
            >
              10.370.000 تومان
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
