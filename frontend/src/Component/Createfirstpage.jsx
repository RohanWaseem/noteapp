import React, { useEffect, useState } from 'react'
import search from "../assets/searcg3.png"
import info from "../assets/info.png"
import chatbot from "../assets/gemini.png"

import dot from "../assets/3dot.png"
import vvv from "../assets/vvv.webp"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'



const Createfirstpage = () => {

  const [fetchdata , setFetchdata] =  useState([])

  const navigate = useNavigate()


useEffect(()=>{
  const saveddata = JSON.parse(localStorage.getItem("title")) || []
  setFetchdata(saveddata)
},[])


const handlereviewbutton=(title)=>{
  localStorage.setItem("reviewtitlename" , title)
 navigate("/revieweditpage")
}



  return (
    <div className='bg-gray-950 h-screen fixed  w-screen'>

        <div className='flex gap-10 p-5 justify-between'>
            <div>
           <Link to="/"> <div><h1 className='text-orange-500 text-3xl  font-black'>Notepad</h1></div></Link></div>

            <div className='flex gap-5'>
            <div  className='bg-gray-700 w-10 h-10 p-2 rounded-lg flex gap-2'>
                
              <Link to="/search"> <div><img src={search}  className='w-10 ' alt="" /> </div></Link> 
                
            </div>

           <Link to="/chatgpt"> <div><img src={chatbot}  className='bg-gray-700 w-10 h-10 p-2 rounded-lg' alt="" /></div></Link>

            <div><img src={info}  className='bg-gray-700 w-12 h-10 p-2 rounded-lg' alt="" /></div>
            <div><img src={dot}  className='bg-gray-700 w-10 p-2 rounded-lg' alt="" /></div>

          

</div>

        </div>



{fetchdata.length > 0 ? (
  fetchdata.map((r,index)=>(
<div className=' bg-pink-600 ml-5 mr-5  pt-3 pb-3 rounded-xl mb-5 flex items-center ' key={index} onClick={()=>handlereviewbutton(r.title)}>

<h1 className='pl-7 text-lg'>
{r.title}
</h1>
</div>
  ))
):(
  <h1>no data found </h1>
)}

   


     
            <div className='flex justify-between fixed bottom-25 right-5'>
                <div></div>
           <Link to="/addnewtitle">
                <div className='  pr-5 mt-10 rounded-full    '><h1 className='text-white bg-gray-900 text-3xl pb-2 border hover:bg-gray-700   flex justify-center items-center w-15 h-15 font-light  rounded' >+</h1> </div>
                </Link>
            </div>
        
    </div>
  )
}

export default Createfirstpage
