import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <div className="dark:bg-slate-900   min-h-screen  dark:text-white">
        <div className="grid place-items-center  grid-cols-1">
          <div className="mt-[50px]">
            <img
              className="size-[300px] rounded-xl"
              src={require("../Images/404/1.png")}
              alt=""
            />
          </div>
          <div className="text-[100px]">404</div>
          <p dir="rtl">صفحه مورد نظر یافت نشد !!...</p>
          <Link
            to="/digiland"
            className="dark:bg-blue-500  dark:hover:bg-blue-700 bg-rose-500  hover:bg-rose-700 text-white font-bold mt-5 py-2 px-4 rounded-xl"
          >
            {" "}
            صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
}
