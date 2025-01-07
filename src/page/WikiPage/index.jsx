import React,{useContext} from "react";
import Card from "../../components/Card";
import { FilterCardContext } from "../../context";
function WikiPage() {
    const context = useContext(FilterCardContext);
  
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-5">
      {context.filteredData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </section>
  );
}

export default WikiPage;
