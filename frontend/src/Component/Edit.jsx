import React, { useState , useEffect} from "react";
import info from "../assets/info.png";
import back from "../assets/back.png";
import save from "../assets/save1.png";
import i from "../assets/i.png";
import { Link } from "react-router-dom";

const Edit = () => {

  const [title , setTitle] =  useState("")
  const [data , setData] =  useState("")
  const [savepageopen, setSavepageopen] = useState(false);

      const [fetchdata , setFetchdata] =  useState([])

const titlename =  localStorage.getItem("reviewtitlename")
  

useEffect(()=>{
  const saveddata = JSON.parse(localStorage.getItem("title")) || []
  setFetchdata(saveddata)
},[])


 useEffect(() => {
  const singleData = fetchdata.find((r) => r.title === titlename)

  if (singleData) {
    setData(singleData.data)
    setTitle(singleData.title)
  }
}, [fetchdata, titlename])



  const handlecancel = () => {
    setSavepageopen(false);
  };

  const handlesavepage = () => {
    setSavepageopen(true);
  };

  const handlesavenewdata =()=>{

     const oldData =
    JSON.parse(localStorage.getItem("title")) || [];


  const newdata = {
    title : title ,
    data : data
  }

   const updatedData = [...oldData, newdata];

  // save
  localStorage.setItem(
    "title",
    JSON.stringify(updatedData)
  );

  alert("done");

  }
  return (
    <div className="bg-gray-950 h-full w-full fixed">
      <div className="flex justify-between p-5">
        <div>
          <Link to="/Createfirstpage">
            {" "}
            <div>
              <img
                src={back}
                className="bg-gray-700 w-12 h-10 p-2 rounded-lg"
                alt=""
              />
            </div>
          </Link>
        </div>

        <div></div>

        <div className="flex gap-5">
          <div>
            <img
              src={info}
              className="bg-gray-700 w-12 h-10 p-2 rounded-lg"
              alt=""
            />
          </div>
          <div >
            <img
              src={save}
              className="bg-gray-700 w-12 h-10 p-2 rounded-lg"
              alt=""
              onClick={handlesavepage}
            />
          </div>
        </div>
      </div>

   <div className="px-5">
  <div className="pt-5">
    {fetchdata
      .filter((r) => r.title === titlename)
      .map((r) => (
        <textarea
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="
            w-screen
            bg-transparent
            text-white
            text-4xl
            font-bold
            resize-none
            outline-none
            overflow-hid
            leading-tight
            placeholder:text-gray-500
            border-none
            h-full
          "
        />
      ))}
  </div>
</div>

<div className="px-5 mt-4">
  {fetchdata
    .filter((r) => r.title === titlename)
    .map((r) => (
      <textarea
        placeholder="Type something..."
        value={data}
        onChange={(e)=>setData(e.target.value)}
        className="
          w-full
          min-h-screen
          bg-transparent
          text-white
          text-lg
          leading-8
          resize-none
          outline-none
          overflow-hidden
          placeholder:text-gray-500
          border-none
          pb-10
        "
      />
    ))}
</div>

      {savepageopen && (
        <div className="flex justify-center items-center relative  bottom-60  ">
          <div className="bg-gray-900 w-110 h-60 rounded-4xl">
            <div className="flex justify-center mt-8">
              <img src={i} alt="" className="w-12 " />
              <br />
            </div>

            <div className="flex justify-center mt-10 text-4xl ">
              <h1 className="text-gray-300">Are you want to save</h1>
            </div>

            <div className="flex justify-center gap-10 mt-5">
              <div
                className="bg-red-700 text-2xl text-white pl-4 pr-4 pt-1 pb-1  rounded-xl"
                // onClick={handlecancel}
              >
                <button>Cancel</button>
              </div>
              <div className="bg-green-700 text-2xl text-white pl-6 pr-6 pt-1 pb-1  rounded-xl" 
            //   onClick={handlesavenewdata}
              >
                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;
