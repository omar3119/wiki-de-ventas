import React, { useContext, useEffect } from "react";
//Components
import Card from "../../components/Card";
import InputFilter from "../../components/InputFilter";
import ButtonFilter from "../../components/BtnFilter";

//context
import { FilterCardContext } from "../../context";

import { Outlet, useParams } from "react-router-dom";

function Home() {
  const context = useContext(FilterCardContext);

  const { nameFilter } = useParams();

  function fiteredCard() {
    if (nameFilter == "all") {
      context.setFilteredData(context.originalData);
    } else {
      let filterCard = context.originalData.filter(
        (card) => card.nameFilter === nameFilter
      );
      context.setFilteredData(filterCard);
    }
  }

  useEffect(() => {
    fiteredCard();
  }, [nameFilter]);

  let newDataFilter = [
    "all",
    ...new Set(
      context.nameBtn.map((data) => {
        return data.nameFilter;
      })
    ),
  ];

  return (
    <div className="grid  grid-cols-1 gap-4 mt-10">
      <div className="w-full px-5">
        <InputFilter />
        <nav className="w-full flex flex-wrap gap-4 mt-5">
          {newDataFilter.map((data, index) => (
            <ButtonFilter key={index} data={data} />
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
