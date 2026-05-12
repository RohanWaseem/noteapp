// import React, { useState } from "react";
// import chatgpt from "../assets/chatbot.png"
// import back from "../assets/back.png";
// import gemini from "../assets/gemini.png"
// import send from "../assets/send.png"
// import axios from "axios"

// const Chatgpt = () => {
//  const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const sendMessage = async () => {
//     if (!message) return;

//     const userMsg = { type: "user", text: message };
//    setChat((prev) => [...prev, userMsg]); 

//     const res = await axios.post("http://localhost:5000/chat", {
//       message: message,
//     });

//     const botMsg = { type: "bot", text: res.data.reply };

//     setChat((prev) => [...prev, botMsg]);
//     setMessage("");
//   };



//   return (
//     <div className=' w-screen relative'>
//     <div className='bg-gray-950 h-screen   p-5' >

//         {/* navbar */}
  
//   <div className='flex justify-between'>

// <div className='flex '>
//     <div><img src={chatgpt} alt="" className='w-18 relative bottom-3' /></div>
//     <div className='text-orange-500 font-black text-3xl'><h1>NotePaw</h1></div>
// </div>
//   <div>
//               <img
//                 src={back}
//                 className="bg-gray-700 w-12 h-10 p-2 rounded-lg"
//                 alt=""
//               />
//             </div>
//   </div>
     
// {/* center */}

// <div className='flex items-center justify-center  '>
//     <div className='flex items-center h-100'>
//     <img src={gemini} alt=""className='w-30' /><br />
//     </div>

// </div>
   
// <div className='flex  justify-center relative bottom-35   '>
//     <h1 className='text-gray-300  font-serif text-4xl shadow-amber-900'>Ask Our AI anything!</h1>
  

// </div>

//  <div className="flex-1 p-4 overflow-y-auto">
//         {chat.map((c, i) => (
//           <div key={i} className={c.type === "user" ? "text-right" : "text-left"}>
//             <p className={c.type === "user" ? "text-blue-400" : "text-green-400"}>
//               {c.text}
//             </p>
//           </div>
//         ))}
//       </div>



// {/* footer  */}

// <div className='fixed bottom-3 left-0  w-full  p-2 bg-gray-950 flex'>

//   <input 
//     type="text" 
//     placeholder="Ask me anything" 
//     className="bg-gray-700 text-white pl-2 rounded w-full  h-10 "
//      value={message}
//           onChange={(e) => setMessage(e.target.value)}
//   />
 
//  <img src={send} className='w-10 relative right-12 ' onClick={sendMessage} alt="" />


// </div>


//     </div>
//     </div>
//   )
// }

// export default Chatgpt


import React, { useState, useRef, useEffect } from "react";
import chatgpt from "../assets/chatbot.png";
import back from "../assets/back.png";
import gemini from "../assets/gemini.png";
import send from "../assets/send.png";
import axios from "axios";

const Chatgpt = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { type: "user", text: message };
    setChat((prev) => [...prev, userMsg]);

    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/chat", {
        message,
      });

      const botMsg = { type: "bot", text: res.data.reply };
      setChat((prev) => [...prev, botMsg]);

    } catch (err) {
      setChat((prev) => [
        ...prev,
        { type: "bot", text: "Server error ❌" },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="w-screen relative bg-gray-950 h-screen flex flex-col">

      {/* NAVBAR */}
      <div className="flex justify-between p-5">
        <div className="flex items-center gap-2">
          <img src={chatgpt} className="w-14" />
          <h1 className="text-orange-500 font-black text-2xl">NotePaw</h1>
        </div>

        <img src={back} className="bg-gray-700 w-10 h-10 p-2 rounded-lg" />
      </div>

      {/* CENTER */}
      <div className="flex flex-col items-center justify-center flex-1">
        <img src={gemini} className="w-24 mb-4" />
        <h1 className="text-gray-300 text-2xl md:text-4xl text-center">
          Ask Our AI anything!
        </h1>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">

        {chat.map((c, i) => (
          <div
            key={i}
            className={c.type === "user" ? "text-right" : "text-left"}
          >
            <span
              className={
                c.type === "user"
                  ? "bg-blue-500 text-white px-3 py-2 rounded-lg inline-block"
                  : "bg-green-500 text-white px-3 py-2 rounded-lg inline-block"
              }
            >
              {c.text}
            </span>
          </div>
        ))}

        {loading && (
          <p className="text-gray-400 text-sm">Thinking...</p>
        )}

        <div ref={chatEndRef}></div>
      </div>

      {/* INPUT */}
      <div className="fixed bottom-0 left-0 w-full p-3 bg-gray-950 flex gap-2">

        <input
          type="text"
          placeholder="Ask me anything..."
          className="bg-gray-700 text-white pl-3 rounded w-full h-10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <img
          src={send}
          className="w-10 cursor-pointer"
          onClick={sendMessage}
        />
      </div>

    </div>
  );
};

export default Chatgpt;