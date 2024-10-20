import Updatedcomponent from "./Hoc";

const Login = ({
  firstname,
  handlerfirstname,
  handleranswer,
  savefirstname,
  lastname,
  handlerlastname,
  savelastname,
  firstrandomnumber,
  secondrandomnumber,
  refreshrandomnumber,
  generaterandomnumber,
  submit,
  answer,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 dark:bg-slate-900 dark:text-white sm:grid-cols-2 align-items-center place-items-center   px-3  gap-x-[20px] gap-y-3">
        <div className="py-[25px]">
          <img
            src={require("../Images/login/1.jpg")}
            className="rounded-lg  size-[500px]"
          />
        </div>
        <div
          className=" rounded-xl text-right text-white bg-red-600 dark:bg-blue-700"
          dir="rtl"
        >
          <h1 className="text-center py-2">عضویت</h1>

          <div className="flex mt-4 flex-wrap justify-center mx-3">
            <div>
              <div className="mr-5">نام</div>
              <input
                value={firstname}
                onChange={handlerfirstname}
                type="text"
                className="text-black mr-3 rounded-lg mt-1 text-center p-2 outline-none"
              />
            </div>

            <div>
              <div className="mr-5">نام خانوادگی</div>
              <input
                value={lastname}
                onChange={handlerlastname}
                type="text"
                className="text-black mr-3 rounded-lg mt-1 text-center p-2 outline-none"
              />
            </div>
          </div>
          <div className="mt-5 flex gap-3 flex-wrap justify-center ">
            <input
              value={answer}
              onChange={handleranswer}
              type="text"
              className="text-black w-[30%] text-center outline-none py-1 rounded-lg"
            />

            <div className="mt-2">
              = {firstrandomnumber} + {secondrandomnumber}
            </div>
            <button onClick={generaterandomnumber}>
              {refreshrandomnumber}
            </button>
          </div>
          <div className="flex justify-around gap-x-[60px]  mt-[40px] mb-[20px]">
            <button
              disabled={firstname.length == 0 || lastname.length == 0}
              onClick={submit}
              className="disabled:bg-slate-500 disabled:text-gray-600 rounded-lg bg-orange-500  text-gray-100 font-bold py-2 px-4"
            >
              ثبت
            </button>
            {savefirstname} {savelastname}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Updatedcomponent(Login);
