import React, { useEffect, useState } from 'react'
import back from "../assets/back.png";
import edit from "../assets/edit.png";
import { Link } from 'react-router-dom';




const Revieworeditpage = () => {

      const [fetchdata , setFetchdata] =  useState([])
    

const titlename =  localStorage.getItem("reviewtitlename")

useEffect(()=>{
  const saveddata = JSON.parse(localStorage.getItem("title")) || []
  setFetchdata(saveddata)
},[])



  return (

    <>

<div>
    
    <div className='bg-gray-950 h-screen '>

{/* back or edit button  */}
      <div className='flex justify-between p-5'>

<Link to="/createfirstpage"><div className=''><img src={back} alt=""  className='w-8 h-8 rounded p-1 bg-gray-700 '/></div></Link>
<Link to="/edit"><div className=''> <img src={edit} alt="" className='w-12 h-8 p-1 rounded bg-gray-700' /></div></Link>
      </div>



{/* title name  */}


<div>
   {fetchdata.length > 0 ? (
  fetchdata
  .filter((r)=>r.title.includes(titlename))
  .map((r,index)=>(
<div  key={index} className='text-white'>

<h1 className='pl-7 text-xl font-bold'>
{r.title}
</h1>
</div>
  ))
):(
  <h1>no data found </h1>
)}
</div>

{/* body  */}


<div className='mt-9 '>
   {fetchdata.length > 0 ? (
  fetchdata
  .filter((r)=>r.title.includes(titlename))
  .map((r,index)=>(
<div  key={index} className='text-white'>

<h1 className='pl-7 text-lg text-gray-200'>
{r.data}
</h1>
</div>
  ))
):(
  <h1>no data found </h1>
)}
</div>



    </div>









   {/* {fetchdata.length > 0 ? (
  fetchdata
  .filter((r)=>r.title.includes(titlename))
  .map((r,index)=>(
<div className=' bg-pink-600 ml-5 mr-5  pt-3 pb-3 rounded-xl mb-5 flex items-center ' key={index} onClick={()=>handlereviewbutton(r.title)}>

<h1 className='pl-7 text-lg'>
{r.data}
</h1>
</div>
  ))
):(
  <h1>no data found </h1>
)} */}

</div>
</>

  )
}

export default Revieworeditpage
