import React, { useState } from 'react'
import info from "../assets/info.png"
import back from "../assets/back.png"
import save from "../assets/save1.png"
import i from "../assets/i.png"
import { Link } from 'react-router-dom'



const Addnewtitlepage = () => {

  const [savepageopen , setSavepageopen] =  useState(false)


  const handlecancel =()=>{
    setSavepageopen(false)
  }


  const handlesavepage =()=>{
    setSavepageopen(true)
  }
  return (
    <div className='bg-gray-950 h-screen'>
      

      <div className='flex justify-between p-5'>
        <div>
                     <Link to="/Createfirstpage">   <div><img src={back}  className='bg-gray-700 w-12 h-10 p-2 rounded-lg' alt="" /></div></Link>
            
        </div>

        <div></div>

        <div className='flex gap-5'>
                        <div><img src={info}  className='bg-gray-700 w-12 h-10 p-2 rounded-lg' alt="" /></div>
                        <div onClick={handlesavepage}><img src={save}  className='bg-gray-700 w-12 h-10 p-2 rounded-lg' alt="" /></div>
            
        </div>
      </div>




<div className='text-white text-4xl pt-5 pl-4'><textarea type="text" placeholder='Title' className=' overflow-hidden  h-15 outline-none   w-150  ' /></div>




<div className='h-100'><textarea type="text" className='text-white mt-5 align-top h-100 text-xl ml-4  w-150  ' placeholder='Type something...' /></div>






{
      savepageopen && (
        <div className='flex justify-center items-center relative  bottom-60  '>
<div className='bg-gray-900 w-110 h-60 rounded-4xl'>


<div className='flex justify-center mt-8'>
  <img src={i} alt=""  className='w-12 '/><br /></div>

<div className='flex justify-center mt-10 text-4xl '>
  <h1 className='text-gray-300'>Are you want to save</h1></div>



<div className='flex justify-center gap-10 mt-5'>
  <div className='bg-red-700 text-2xl text-white pl-4 pr-4 pt-1 pb-1  rounded-xl' onClick={handlecancel}><button>Cancel</button></div>
  <div  className='bg-green-700 text-2xl text-white pl-6 pr-6 pt-1 pb-1  rounded-xl'><button>Save</button></div>


</div>

  </div>




</div>
      )

    }





    </div>
  )
}

export default Addnewtitlepage
