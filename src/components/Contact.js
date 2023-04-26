import React from "react";
import mapImage from "../images/map2.jpg";
const Contact = () => {
  return (
    <div className="relative bg-white ">
      <div className="mt-44 ">
        <img src={mapImage} className="w-full h-64" />
        <div className="flex justify-between mt-36">
          <div className="absolute top-1 left-0 right-0 bottom-0 flex justify-center  items-center">
            <p className="text-4xl font-bold text-white mobile:text-[30px] mobile:ml-2 ">
              We offer all kinds of IT services that <br /> ensure your success
            </p>
          </div>
          <div className="absolute top-1 left-0 right-0 bottom-0 flex justify-end items-center ">
            <button className="text-white font-bold border border-white h-14 rounded-md w-28 hover:bg-white hover:text-black  md:mt-48 lg:mt-0 mt-48  sm:mt-48 ">
              Contact Us
            </button>
            <button className="text-white font-bold border border-white rounded-md h-14 w-28 mx-4 hover:bg-white hover:text-black md:mt-48 lg:mt-0 mt-48 sm:mt-48">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
