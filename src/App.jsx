import { useState, useContext, useEffect } from "react";
import { BrowserRouter, useRoutes, Routes, Route, useParams } from "react-router-dom";

//Components
import Card from "../src/components/Card";

//Pages
import Home from "../src/page/Home";
import NoFound from "../src/page/NoFound";
//context
import { FilterCardProvider } from "../src/context";
import { FilterCardContext } from "../src/context";

import Header from "./components/Header";
//Styles
import "./App.css";

const AppRouters = () => {
  let context = useContext(FilterCardContext);


  return <Routes>
    <Route path="/" element={<Home />}>
      <Route
        path="/:nameFilter"
        element={
          <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-5">
            {context.filteredData.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </section>
        }
      />
    </Route>
    <Route path="/*" element={<NoFound />} />
  </Routes>;
};

function App() {
  return (
    <BrowserRouter>
      <FilterCardProvider>
        <div className="w-full flex flex-col items-center h-full">
          <Header />
          <AppRouters />
        </div>
      </FilterCardProvider>
    </BrowserRouter>
  );
}

export default App;
