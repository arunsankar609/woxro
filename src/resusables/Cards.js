import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl hover:text-white hover:bg-slate-950  mt-14 ml-8">
      <img
        className="w-10"
        src="https://via.placeholder.com/350x150"
        alt="Placeholder"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">Card Heading</div>
        <p className=" text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
          odio vitae libero euismod tincidunt.
        </p>
      </div>
    </div>
  );
};

export default Card;
