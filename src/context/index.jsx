import React, { createContext, useState } from "react";

import dataWiki from "../data/data.json";

export const FilterCardContext = createContext();

export function FilterCardProvider({ children }) {
  const [originalData] = useState(dataWiki); 
  const [filteredData, setFilteredData] = useState(dataWiki);
  const [nameBtn, setNameBtn] = useState(dataWiki);



  return (
    <FilterCardContext.Provider value={{ originalData,filteredData,setFilteredData, nameBtn,setNameBtn }}>
      {children}
    </FilterCardContext.Provider>
  );
}
