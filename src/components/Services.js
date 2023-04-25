import React, { useState } from "react";
import Card from "../resusables/Cards";
import { data } from "../constants/carddata";

const Services = () => {
  const[dummyData,setDummyData]=useState(data)
  console.log("dataaaaa",dummyData);
  return (
    <div className="bg-white">
    <div className=" flex flex-col justify-center">
      <div className="flex justify-center">
        <h1 className="font-medium text-lg m-11">SERVICES WE DELIVER</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="font-bold text-4xl">
          Preparing for your success, we provide truly prominent IT solutions .
        </h1>
      </div>
    </div>
    <div className="flex flex-wrap">
        {dummyData?.map((data)=><Card data={data}/>)}
        
    </div>
    </div>
  );
};

export default Services;
