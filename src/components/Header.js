import React from 'react'

const Header = () => {
  return (
   <div className=' w-full h-auto bg-black'>
       <div className='flex justify-between   text-white'>
        <div>
            <h1><span className='font-semibold'>Now Hiring</span>: Looking for a job in Full Stack Development?</h1>
        </div>
        <div className='flex justify-between  '>
            <h1 className='mr-2'>+91 487 2080 212</h1>
            <h1>Leshore Business Park, Thrissur</h1>
        </div>
      
    </div>
    <div class="bg-white mt-2 h-20 flex items-center justify-start ">
  <img src="https://woxro.com/public/assets/png/woxrologo.png" className="w-40 ml-4" alt="Woxro logo" />
</div>
    <div className='bg-metal h-10 justify-center'>
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
    </div>

   
    
  )
}

export default Header