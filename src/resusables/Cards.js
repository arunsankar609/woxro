import React from "react";

const Card = (props) => {
  const { service, description } = props.data;
  console.log("propsss", service);
  return (
    <div className="max-w-sm cursor-pointer rounded overflow-hidden shadow-lg hover:shadow-xl hover:text-white hover:bg-slate-950  mt-14 ml-8">
      <img
        className="w-10  "
        src="https://via.placeholder.com/350x150"
        alt="Placeholder"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">{service}</div>
        <p className=" text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
