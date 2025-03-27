"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null);

  const { photo, name, college, review } = slide;

  return (
    <div className="perspective-1200 transform-style-preserve-3d">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[50vmin] h-[50vmin] mx-[4vmin] z-10 p-6 bg-gray-100 shadow-lg rounded-lg border"
        onClick={() => handleSlideClick(index)}
        style={{
          transform: current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}>
        
        {/* User Photo */}
        <img src={photo} alt={name} className="w-12 h-12 rounded-full border border-gray-00 shadow-md mb-3" />

        {/* User Name */}
        <h2 className="text-lg md:text-sm lg:text-4xl font-semibold text-black">{name}</h2>

        {/* College Name */}
        <p className="text-xs text-gray-500">{college}</p>

        {/* Review Paragraph */}
        <p className="mt-1 text-gray-800 text-xs md:text-base font-mono  ">{review}</p>
      </li>
    </div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}>
      {/* <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" /> */}
    </button>
  );
};

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const handleNextClick = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto" aria-labelledby={`carousel-heading-${id}`}>
      <ul className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${current * (100 / slides.length)}%)` }}>
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} current={current} handleSlideClick={handleSlideClick} />
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  );
}

export default Slide;
