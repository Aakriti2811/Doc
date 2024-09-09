import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data , reference}) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="w-60 z-10 relative flex-shrink-0 h-72 bg-zinc-900/70 overflow-hidden rounded-[45px] text-white px-8 py-10">
        <FaRegFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">
          {data.desc}
        </p>
        <div className=" footer bottom-0 absolute w-full  left-0  ">
          <div className="flex justify-between items-center px-10 py-3 mb-3">
            <h5>{data.filesize}</h5>

            <span className="w-6 h-6 rounded-full flex items-center justify-center bg-zinc-600">
              {data.close ? <IoIosClose size="1.3em"/>: <FiDownload size="0.8em" />}
            </span>
          
          </div>
          {data.tag.isOpen && (  <div className={`tag w-full p-4 flex items-center justify-center ${data.tag.tagColor=="blue"?"bg-blue-400":"bg-green-600"}`}>
           <h3 className="text-sm font-semibold ">{data.tag.tagtitle}</h3>
          </div>)}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
