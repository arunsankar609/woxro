import React from "react";

const Banner = () => {
  return (
    <div className="relative text-white mt-1">
      <img
        className="w-full h-auto"
        src="https://im.indiatimes.in/content/2022/Sep/istockphoto-970317224-612x612_6332bc43d5d36.jpg"
      />
      <div className="absolute top-1 left-0 right-0 bottom-40 flex justify-center items-center">
        <p className="text-7xl font-bold ">Kerala's Leading Web <br/>
            Design Company</p>
      </div>
      <div className="absolute top-24 left-28 right-0 bottom-0 flex justify-center items-center">
        <p className="text-xl font-bold">Global Web Designing Company That Provides Full-cycle Software Development Services,<br/> E-commerce & Mobile App Development Services.</p>
      </div>
    </div>
  );
};

export default Banner;
