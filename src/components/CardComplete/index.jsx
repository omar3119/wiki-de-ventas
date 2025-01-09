import React, { useContext, useState } from "react";
import { FilterCardContext } from "../../context/index";
import { MdClear } from "react-icons/md";

function CardComplete() {
  const context = useContext(FilterCardContext);
  let $id = context.idCard;

  const showCardId = context.originalData.filter((card)=>(
    card.id == `${$id}`
  ))

  function removeCard() {
    context.setIsShowCard(false);
  }
  return (
    <div
      className={`bg-[#000000dc] w-full h-screen fixed z-10  justify-center items-center px-10 ${
        context.isShowCard ? "flex" : "hidden"
      }`}
    >
      <div className="w-full bg-white text-black p-5 rounded-lg shadow-lg md:max-w-[460px] dark:border dark:border-gray-500 dark:bg-[#1E2028] dark:text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{showCardId[0].title}</h2>
          <MdClear
            className="text-2xl cursor-pointer text-black dark:text-white hover:bg-red-500 rounded-sm"
            onClick={removeCard} title="Close"
          />
        </div>
        <p className="overflow-hidden text-xl ">
        {showCardId[0].description}
        </p>
        <button className="bg-[#1f55dda2] text-white px-2 mt-4 rounded-full text-[12px] border ">
          {showCardId[0].nameFilter}
        </button>
      </div>
    </div>
  );
}

export default CardComplete;
