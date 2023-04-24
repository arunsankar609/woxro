import React from "react";
import Card from "../resusables/Cards";

const Services = () => {
  return (
    <div className="bg-white">
    <div className=" flex flex-col justify-center">
      <div className="flex justify-center">
        <h1 className="font-medium text-lg m-11">SERVICES WE DELIVER</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="font-bold text-4xl">
          Preparing for your success, we provide truly <br/> <span className="ml-40">prominent IT solutions</span> .
        </h1>
      </div>
    </div>
    <div className="flex flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  );
};

export default Services;
