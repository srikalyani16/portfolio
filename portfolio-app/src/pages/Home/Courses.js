import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

import { courses } from "../../resources/courses";

const Courses = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title={"Courses"} />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((value, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                }`}
              >
                {value.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl">
              {courses[selectedItemIndex].title}
            </h1>

            <p className="text-white text-1xl">
              Apple Inc. is an American multinational technology company that
              specializes in designing, manufacturing, and marketing consumer
              electronics, software, and online services. Founded in 1976 by
              Steve Jobs, Steve Wozniak, and Ronald Wayne, Apple is renowned for
              its innovative products such as the iPhone, iPad, Mac, and Apple
              Watch. The company is headquartered in Cupertino, California, and
              is known for its sleek design aesthetics, cutting-edge technology,
              and strong brand loyalty.
            </p>
          </div>
          <img
            src={courses[selectedItemIndex].image}
            alt={courses[selectedItemIndex].title}
            className="w-72 h-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
