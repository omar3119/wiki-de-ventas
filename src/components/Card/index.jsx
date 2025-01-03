import React from "react";
import { CiMenuKebab } from "react-icons/ci";

function Card(data) {
  return (
    <div className="w-full bg-white text-black p-5 rounded-lg shadow-lg md:max-w-[260px] dark:border dark:border-gray-500 dark:bg-[#1E2028] dark:text-white"> 
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{data.data.title}</h2>
        <CiMenuKebab className="cursor-pointer text-black dark:text-white" />
      </div>
      <p className="overflow-hidden line-clamp-6">{data.data.description}</p>
      <button className="bg-[#1f55dda2] text-white px-2 mt-4 rounded-full text-[12px] border ">{data.data.nameFilter}</button>
    </div>
  );
}

export default Card;
