import React, { useEffect, useState } from 'react'
import axios from "axios"

const Banner = () => {
  const[content,setContent]=useState("")
  const getAllData=async()=>{
      await axios.get('http://localhost:8080/api/v1/contentupdation/addlocation/')
      .then(response => {
       console.log(response.data[0]);
      
       setContent(response.data[0].caption)
      
     })
     .catch(error => {
       console.error(error);
     });
   }
   useEffect(()=>{getAllData()},[])
  return (
    <div class="relative text-white mt-1">
  <img class="w-full h-auto" src="https://im.indiatimes.in/content/2022/Sep/istockphoto-970317224-612x612_6332bc43d5d36.jpg" />
  <div class="absolute top-1 left-0 right-0 bottom-40 flex justify-center items-center text-container text-container-1">
    <p class="lg:text-7xl font-bold ml-60 sm:text-xl ">{ content }</p>
  </div>
  <div class="absolute top-24 left-28 right-0 bottom-0 flex justify-center items-center text-container text-container-2">
    <p class="text-xl font-bold mr-16">Global Web Designing Company That Provides Full-cycle Software Development Services,<br/> E-commerce & Mobile App Development Services.</p>
  </div>
</div>
  );
};

export default Banner;
