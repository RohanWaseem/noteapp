import React from 'react'
import Logo from './Component/Logo'

import {BrowserRouter , Routes , Route}  from "react-router-dom"
import Createfirstpage from './Component/Createfirstpage'
import Addnewtitlepage from './Component/Addnewtitlepage'
import Listpage from './Component/Listpage'
const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Logo/>} />
        <Route  path='/listpage' element={<Listpage/>} />

        <Route  path='/createfirstpage' element={<Createfirstpage/>} />
        <Route  path='/addnewtitle' element={<Addnewtitlepage/>} />




      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
