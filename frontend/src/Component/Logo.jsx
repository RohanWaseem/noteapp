import React from 'react'
import Loogo from "../assets/logo1.png"
import {Link} from "react-router-dom"

const Logo = () => {
  return (
    <div>
    <Link to="/createfirstpage">
     <div className='bg-black h-screen '>
         <div className='flex justify-center items-center h-screen'>
           <img src={Loogo} alt="" className=' '  />
         </div>
       </div>
       </Link>
       </div>
  )
}

export default Logo
