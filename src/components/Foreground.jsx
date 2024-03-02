import { useRef } from "react";
import Card from "./Card";
import icon from "../assets/vite.svg";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      fileSize: ".8mb",
      close: true,
      tag: {
        isOpen: false,
        tagDetails: "Download Now",
      },
    },
    {
      desc: "my name is subhendu , my bestfriend is suman",
      fileSize: "20.0mb",
      close: false,
      tag: {
        isOpen: true,
        tagDetails: "Download Now",
      },
    },
    {
      desc: "asus vivobook pro 14 oled, amd radeon graphics",
      fileSize: "50.37mb",
      close: true,
      tag: {
        isOpen: false,
        tagDetails: "Download Now",
      },
    },
    {
      desc: "i am a student of cse branch of cupgs bput rourkela",
      fileSize: ".5mb",
      close: false,
      tag: {
        isOpen: true,
        tagDetails: "Download Now",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed p-44 flex flex-wrap gap-10 top-0 left-0 w-full h-screen z-[3]"
    >
      {data.map((item, index) => {
        return <Card key={index} data={item} icon={icon} reference={ref} />;
      })}
    </div>
  );
}

export default Foreground;
