import React from 'react'
import search from "../assets/searcg3.png"
import info from "../assets/info.png"
import dot from "../assets/3dot.png"
import vvv from "../assets/vvv.webp"
import {Link} from "react-router-dom"



const Createfirstpage = () => {
  return (
    <div className='bg-gray-950 h-screen fixed  w-screen'>

        <div className='flex gap-10 p-5 justify-between'>
            <div>
            <div><h1 className='text-orange-500 text-3xl  font-black'>Notepad</h1></div></div>

            <div className='flex gap-5'>
            <div  className='bg-gray-700 w-10 h-10 p-2 rounded-lg flex gap-2'>
                
                <div><img src={search}  className='w-10 ' alt="" /> </div>
                
            </div>


            <div><img src={info}  className='bg-gray-700 w-12 h-10 p-2 rounded-lg' alt="" /></div>
            <div><img src={dot}  className='bg-gray-700 w-10 p-2 rounded-lg' alt="" /></div>

          

</div>

        </div>


      <div className='text-white flex justify-center mt-10   '>
        
        <img src={vvv} alt="" className='w-100  ' />

    
        </div>

        <div className='flex justify-center relative bottom-10'>
        <h1 className='text-white'>Create Your First note!</h1>

        </div>


     
            <div className='flex justify-between'>
                <div></div>
           <Link to="/addnewtitle">
                <div className='  pr-5 mt-10 rounded-full    '><h1 className='text-white bg-gray-900 text-3xl pb-2 border hover:bg-gray-700   flex justify-center items-center w-15 h-15 font-light  rounded' >+</h1> </div>
                </Link>
            </div>
        
    </div>
  )
}

export default Createfirstpage
