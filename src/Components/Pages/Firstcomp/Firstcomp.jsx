import { useState } from "react";
import image1 from "../Images/Firstslider/1.webp";
import image2 from "../Images/Firstslider/2.webp";
import image3 from "../Images/Firstslider/3.webp";
import Categori from "./Categori";
import { FaCaretLeft, FaChevronCircleLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa6";
import Advertaizment from "./Advertaizment";
import Bestsells from "./Bestsells";
import Mobilecellphone from "./Mobilecellphone";

const Firstcomp = () => {
  const slides = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  return (
    <div>
      <div className="relative w-[100%] h-[300px] overflow-hidden mx-auto">
        <div
          className="flex w-[100%]  transform transition-transform duration-500 ease-in-out hover:scale-110"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((elem, index) => (
            <div className="min-w-[100%]" key={index}>
              <div className="mx-auto 2xl:w-[1600px] 2xl:h-[300px] xl:h-[300px] xl:w-[1450px] lg:h-[300px] lg:w-[1180px] md:w-[1000px] md:h-[300px]  sm:h-[300px] smd:h-[300px]">
                <img className="w-[100%] h-[100%] object-cover" src={elem} />
              </div>
            </div>
          ))}
        </div>
        <button
          className="prev top-[50%] absolute text-white"
          onClick={prevSlide}
        >
          <FaCaretLeft className="text-[55px] outline-none mr-2 dark:text-slate-800" />
        </button>
        <button
          className="next absolute top-[50%] right-0 text-white"
          onClick={nextSlide}
        >
          <FaCaretRight className="text-[55px] outline-none mr-2 dark:text-slate-800" />
        </button>
      </div>
      <Categori />
      <Advertaizment />
      <Bestsells />
      <Mobilecellphone />
    </div>
  );
};

export default Firstcomp;
