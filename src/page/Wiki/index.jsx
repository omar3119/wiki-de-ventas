import React, { useContext, useEffect } from "react";
import Layout from "../../Layout";

//Components
import Card from "../../components/Card";
import InputFilter from "../../components/InputFilter";
import ButtonFilter from "../../components/BtnFilter";

//context
import { FilterCardContext } from "../../context";

import { Outlet, useParams } from "react-router-dom";

function Wiki() {
  const context = useContext(FilterCardContext);

  const { nameFilter } = useParams();
  const filterName = nameFilter || "all";
  function fiteredCard() {
    if (filterName == "all") {
      context.setFilteredData(context.originalData);
    } else {
      let filterCard = context.originalData.filter(
        (card) => card.nameFilter === filterName
      );
      context.setFilteredData(filterCard);

    }
  }

  useEffect(() => {
    fiteredCard();
  }, [filterName]);

  let newDataFilter = [
    "all",
    ...new Set(
      context.nameBtn.map((data) => {
        return data.nameFilter;
      })
    ),
  ];

  return (
    <Layout>
    <div className="w-full grid  grid-cols-1 gap-4 mt-10  max-w-[1024px]">
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
    </Layout>
  );
}

export default Wiki;
