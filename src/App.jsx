import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import { IoIosAddCircle } from "react-icons/io";

function App() {
  return (
    <div className=" relative w-screen  h-full bg-gray-900">
      <div className=" absolute top-5 h-full w-full py-10 flex justify-center text-xl text-zinc-500">
        {" "}
        Documents
      </div>

      <h1 className="absolute left-1/2 h-full top-60 -translate-x-[50%] font-semibold text-zinc-400 text-[12vw] leading-none tracking-tighter">
        Docs.
      </h1>


      <Foreground />
  
      {/* <Background /> */}
    </div>
  );
}

export default App;
