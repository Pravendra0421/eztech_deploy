import { useState } from "react";
import TechSolution from "./TechSolution";
import SolveProblem from "./SolveProblem";
import EZChat from "./EZChat";
const HomeTech = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index:any) => {
    setActiveIndex(index);
  };

  const textItems = ["EZTech Solution", "Solve Complex Problem", "EZChat"];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto bg-gray-100 rounded-lg items-center shadow-lg p-10">
        <div className="w-full lg:w-[60%] lg:translate-x-56 sm:translate-x-0 flex justify-around items-center  rounded-2xl p-4 space-x-4">
          {textItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`cursor-pointer px-6 py-3 text-center text-xl font-medium rounded-2xl transition-all duration-300 transform ${
                activeIndex === index
                  ? "bg-white text-gray-600 scale-105 shadow-xl"
                  : " text-gray-900 hover:bg-gray-100 hover:text-gray-600"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-10">
          {activeIndex === 0 && <TechSolution />}
          {activeIndex === 1 && <SolveProblem />}
          {activeIndex === 2 && <EZChat />}
        </div>
      </div>
    </div>
  );
};

export default HomeTech;
