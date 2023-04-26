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
  <div class="absolute top-1 left-0 right-0 bottom-0 flex justify-center items-center text-container text-container-1">
    <p class="  font-bold mobile:ml-2 tablet:text-[30px] laptop:text-[40px] desktop:text-[60px] desktop:ml-6  ">{ content }</p>
  </div>
  <div class="absolute top-24 left-18 right-0 bottom-0 w-full flex justify-center items-center text-container text-container-2">
    <p class="mobile:text-[10px] mobile:ml-2 font-bold tablet:text-[15px] tablet:mt-16 desktop:text-[20px] desktop:mt-[170px] desktop:mr-[180px]  ">Global Web Designing Company That Provides Full-cycle Software Development Services,<br/> E-commerce & Mobile App Development Services.</p>
  </div>
</div>
  );
};

export default Banner;
