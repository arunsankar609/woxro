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
       <div className='flex justify-between   text-white  mobile:hidden laptop:block'>
        <div>
            <h1><span className='font-semibold '>Now Hiring</span>: Looking for a job in Full Stack Development?</h1>
        </div>
        <div className='flex justify-end  '>
            <h1 className='mr-2'>+{phone}</h1>
            <h1>{address}</h1>
        </div>
      
    </div>
    <div className="bg-white mt-2 h-20 flex items-center justify-between ">
  <img src="https://woxro.com/public/assets/png/woxrologo.png" className="laptop:w-40 mobile:w-[120px]  ml-4" alt="Woxro logo" />
  <div className='flex'>
  <Link to="/admin"> <button className='p-2 m-2 bg-black text-white rounded-md mobile:hidden tablet:block laptop:block'>Admin Panel</button></Link>
  <div className='hidden md mobile:block laptop:hidden'>
  <img onClick={()=>setSideBar(!sidebar)} className='w-10 m-3 ' src='https://cdn-icons-png.flaticon.com/512/3388/3388823.png'alt='MenuBar' />
  </div>
  </div>

 
</div>
    <div className='md:bg-metal h-10 justify-center  mobile:hidden laptop:block'>
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
   {sidebar && <div className=' absolute sticky right-0 mobile:block laptop:hidden     '>
        <ul className=' flex flex-col justify-between  h-screen items-center mt-1 text-white text-lg '>
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