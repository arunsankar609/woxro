import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Header = () => {
    const[address,setAddress]=useState("")
    const[phone,setPhone]=useState("")
    const[sidebar,setSideBar]=useState(false)
    const[content,setContent]=useState("")
    const getAllData=async()=>{
        await axios.get('http://localhost:8080/api/v1/contentupdation/addlocation/')
        .then(response => {
         console.log(response.data[0]);
         setPhone(response.data[0].number)
         setAddress(response.data[0].location)
         setContent(response.data[0].caption)
        
       })
       .catch(error => {
         console.error(error);
       });
     }
     useEffect(()=>{getAllData()},[])
  return (
   <div className=' w-full h-auto bg-black'>
       <div className='flex justify-between   text-white  sm:hidden lg:block'>
        <div>
            <h1><span className='font-semibold '>Now Hiring</span>: Looking for a job in Full Stack Development?</h1>
        </div>
        <div className='flex justify-end  '>
            <h1 className='mr-2'>+{phone}</h1>
            <h1>{address}</h1>
        </div>
      
    </div>
    <div className="bg-white mt-2 h-20 flex items-center justify-between ">
  <img src="https://woxro.com/public/assets/png/woxrologo.png" className="w-40 ml-4" alt="Woxro logo" />
  <div className='flex'>
  <Link to="/admin"> <button className='p-2 m-2 bg-black text-white rounded-md'>Admin Panel</button></Link>
  <div className='hidden md sm:block md:hidden'>
  <img onClick={()=>setSideBar(!sidebar)} className='w-10 m-3 ' src='https://cdn-icons-png.flaticon.com/512/3388/3388823.png'alt='MenuBar' />
  </div>
  </div>

 
</div>
    <div className='md:bg-metal h-10 justify-center hidden sm md:block'>
        <ul className='flex justify-between items-center mt-1 text-white mx-14 text-lg'>
            <li>Home </li>
            <li>About Us </li>
            <li>Services </li>
            <li>Technology </li>
            <li>Careers </li>
            <li>Blogs </li>
            <li>Our Works </li>
            <li>Contact us </li>
        </ul>
    </div>
   {sidebar && <div className=' z-50 absolute hidden md sm:block md:hidden    justify-items-end ml-64 '>
        <ul className='bg-metal flex flex-col justify-between w-[40vh] h-screen items-center mt-1 text-white mx-14 text-lg p-4'>
            <li>Home </li>
            <li>About Us </li>
            <li>Services </li>
            <li>Technology </li>
            <li>Careers </li>
            <li>Blogs </li>
            <li>Our Works </li>
            <li>Contact us </li>
        </ul>
    </div>}
    </div>

   
    
  )
}

export default Header