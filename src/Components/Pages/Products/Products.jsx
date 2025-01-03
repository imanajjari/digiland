import React from "react";
import Updatedcomponent from "./Hoc";
import { Link } from "react-router-dom";

const Product = ({ result, search, handlerSearch, filteredItems, loading ,totalproducts }) => {
  return (
    <div className="dark:bg-slate-900 min-h-screen  dark:text-white py-2">
      <div className="flex justify-center py-6 gap-2">
        <input
          value={search}
          onChange={handlerSearch}
          className="text-slate-700  dark:placeholder-slate-600 placeholder-rose-300 font-black text-[16px] dark:text-gray-800 border-[3.5px] bg-slate-200 border-rose-200  dark:border-slate-800 outline-none rounded-xl w-[50%] dark:bg-slate-400 text-center py-1"
          placeholder=".... جستجوی محصولات "
        />
        <button
          className="dark:bg-blue-500 bg-rose-600 dark:hover:bg-blue-700 text-white font-bold px-2 rounded-lg duration-700"
          onClick={result}
        >
          جستجو
        </button>
        <button
          className="dark:bg-blue-500 bg-rose-600 dark:hover:bg-blue-700 text-white font-bold px-2 rounded-lg duration-700"
          onClick={totalproducts}
        >
          کل محصولات
        </button>
      </div>
      {loading && loading ? (
        <>
          <div role="status" className="">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mt-4  mx-auto text-center text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap  justify-center gap-y-[50px] px-2 gap-x-[30px] pt-[10px]">
            {filteredItems.length > 0 ? (
              filteredItems.map((elem) => (
                <div className="flex p-3" key={elem.id}>
                  <div className=" dark:rounded-b-md border-[2.5px]  border-slate-100 duration-700 rounded-t-2xl   hover:shadow-md dark:border-[4px] dark:border-gray-800">
                    <img
                      className="size-[180px] rounded-md"
                      src={elem.image}
                      alt=""
                    />
                    <div className="text-center mt-5"> {elem.category}</div>
                    <div className="text-center">{elem.price} $</div>
                    <div className="text-center mx-auto bg-gray-500 dark:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-white dark:text-gray-600 text-[14px] p-1 hover:bg-gray-700 duration-500 text-white rounded-b-[4px] ">
                      <Link to={`/products/${elem.id}`}>نمایش بیش تر</Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="">چنین محصولی وجود ندارد</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Updatedcomponent(Product);
