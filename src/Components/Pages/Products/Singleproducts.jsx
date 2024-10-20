import React from "react";
import Updatedcomponent from "./Hoc";
import { Link } from "react-router-dom";
const Singleproducts = ({ singelproduct}) => {
  return (
    singelproduct && (
      <div
        className="flex py-10 dark:bg-slate-900 dark:text-white    gap-y-[20px] px-[5px] justify-around flex-wrap"
        dir=""
      >
        <div className="">
          <img
            className="size-[280px] dark:botder-2   rounded-t-2xl"
            src={singelproduct.image}
          />

          <button className="bg-gray-500 outline-none  p-2 rounded-b-2xl  text-white w-full mx-auto hover:rounded-b-2xl font-bold hover:bg-gray-800">
            <Link to="/Products"> صفحه محصولات</Link>
          </button>
        </div>

        <div className="" dir="rtl">
          <div className="px-[5px]" dir="rtl">
            <div className="text-purple-800 dark:text-white mx-[5px] font-bold">
              {singelproduct.title}
            </div>
            <div className="flex  flex-wrap mx-[5px] mt-[20px] gap-x-[40px] gap-y-[20px]">
              <p className="text-gray-600 dark:text-white">
                نوع محصول : {singelproduct.category}
              </p>
              <p className="text-gray-600 dark:text-white">
                کد فروش : {singelproduct.rating.count}
              </p>
            </div>
            <div
              className="p-1 text-blue-500 dark:text-white mx-[5px] mt-[20px] font-extrabold flex"
              dir="rtl"
            >
              <p className="">000</p>

              <p className="">{singelproduct.price}</p>
              <p className="mr-1">تومان</p>
            </div>
            <h1 className="my-[20px] mx-[5px] ">درباره محصول :</h1>
            <div>
              <div className="w-[65vw] leading-[35px] mx-auto dark:text-white  text-gray-700">
                {singelproduct.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Updatedcomponent(Singleproducts);
