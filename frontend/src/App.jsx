import React from 'react'
import Logo from './Component/Logo'

import {BrowserRouter , Routes , Route}  from "react-router-dom"
import Createfirstpage from './Component/Createfirstpage'
import Addnewtitlepage from './Component/Addnewtitlepage'
import Listpage from './Component/Listpage'
import Search from './Component/Search'
import Revieworeditpage from './Component/Revieworeditpage'
import Edit from './Component/Edit'
const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Logo/>} />
        <Route  path='/listpage' element={<Listpage/>} />

        <Route  path='/createfirstpage' element={<Createfirstpage/>} />
        <Route  path='/addnewtitle' element={<Addnewtitlepage/>} />
        <Route  path='/search' element={<Search/>} />
        <Route  path='/revieweditpage' element={<Revieworeditpage/>} />
        <Route  path='/edit' element={<Edit/>} />








      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
