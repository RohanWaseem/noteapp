import React, { useEffect, useState } from 'react'

const Search = () => {

    const [fetchdata, setFetchdata] = useState([])
    const [search , setSearch] =  useState("")

useEffect(()=>{
  const saveddata =JSON.parse( localStorage.getItem("title")) || []
  setFetchdata(saveddata)
},[])



  return (
    <div className=''>
    <div className='bg-gray-950 h-screen '>
        <div className='pt-10 pl-5 pr-5  '>
<input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search by the Keyword...' className='text-white bg-gray-700 w-full rounded-2xl pt-2 pb-2 pl-5 pr-5 '  />
        </div>

        <div>
            {fetchdata.length > 0 ? (
                fetchdata
                    .filter((e) =>
      e.title
        .toLowerCase()
        .includes(search.toLowerCase())
    )
                .map((e,index)=>(
                    <div className=' bg-pink-600 ml-5 mt-5 mr-5  pt-3 pb-3 rounded-xl mb-5 flex items-center ' key={index}>

<h1 className='pl-7 text-lg'>
{e.title}
</h1>
</div>
                ))
            ):(<h1>no data found</h1>)}
        </div>
      
    </div>
    </div>
  )
}

export default Search
