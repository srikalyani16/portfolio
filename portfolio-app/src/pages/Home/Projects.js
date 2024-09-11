import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects} = portfolioData;
  return (
    <div id="projects">
      <SectionTitle title={"Projects"} />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((value, index) => (
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
            <img src= {projects[selectedItemIndex].image} alt= {projects[selectedItemIndex].title} className="w-72 h-60"/>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {projects[selectedItemIndex].title}
          </h1>
          
          <p className="text-white text-1xl">{projects[selectedItemIndex].description}</p>
          
          <div>
          <h1 className="text-tertiary">Skills</h1>
          <div className="flex flex-wrap">
          {projects[selectedItemIndex].skills.map((skill, index) => (
              <div className="py-2 pr-5">
                <h1 className="text-white">{skill}</h1>
              </div>
            ))}
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

