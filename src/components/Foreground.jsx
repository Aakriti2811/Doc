import React, { useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Card from "./card";

const data = [
  {
    id: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    filesize: "0.5mb",
    close: true,
    tag: { isOpen: true, tagtitle: "Download Now..", tagColor: "Green" },
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    filesize: "1mb",
    close: false,
    tag: { isOpen: true, tagtitle: "Upload", tagColor: "blue" },
  },
  {
    id: 3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    filesize: "0.5mb",
    close: true,
    tag: { isOpen: false, tagtitle: "Download Now..", tagColor: "Green" },
  },
  {
    id: 4,
    desc: "This is a card",
    filesize: "0.5mb",
    close: true,
    tag: { isOpen: true, tagtitle: "Download Now..", tagColor: "Green" },
  },
  {
    id: 5,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    filesize: "0.5mb",
    close: true,
    tag: { isOpen: true, tagtitle: "Download Now..", tagColor: "Green" },
  },
];

function Foreground() {
  const ref = useRef(null);

  const [card, setCard] = useState([...data]);
  console.log(card);
  function handleClick() {
    console.log("add");

    // Update the state by adding a new object to the array
    setCard((prev) => [
      ...prev, // Spread the previous array elements
      {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        filesize: "0.5mb",
        close: true,
        tag: { isOpen: true, tagtitle: "Download Now..", tagColor: "Green" },
      },
    ]);
  }

  return (
    <div className="h-screen">
      <div
        onClick={handleClick}
        className="z-[999999] absolute top-0 left-0 bottom-2 border-purple-500 text-white cursor-pointer hover:text-xl transition-all"
      >
        <IoIosAddCircle size="2em" className="text-zinc-50 z-50" />
      </div>
      <div
        ref={ref}
        className="fixed p-5 top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap"
      >
        {card.map((item, index) => (
          <Card data={item} reference={ref} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
