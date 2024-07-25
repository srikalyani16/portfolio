import React from "react";
import { useSelector } from "react-redux";

const Intro = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-9 py-10">
      <h1 className="text-white ">{welcomeText || ""}</h1>
      <h1 className="text-7xl sm:text-3xl font-semibold text-secondary ">
        {firstName || ""}{" "}
        {lastName || ""}
      </h1>
      <h1 className="text-6xl sm:text-2xl font-semibold text-white ">
        {caption || ""}
      </h1>
      <p className="text-white w-2/3 sm:w-full">{description || ""}</p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
