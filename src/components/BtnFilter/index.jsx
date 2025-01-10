import React, {useState} from "react";
import { NavLink } from "react-router-dom";


function BtnFilter(data) {

  const [$url, setUrl] = useState("all")

  return (
    <NavLink
      to={`/wiki/${data.data}`}
      className={({ isActive }) =>
        `shadow-md border-gray-400   text-black py-2 px-4 rounded ${
          isActive ? "bg-blue-500 text-white " : "bg-white text-black hover:bg-blue-400 hover:text-white"
        }`
      }
    >
      {data.data.charAt(0).toUpperCase() + data.data.slice(1)}
    </NavLink>
  );
}

export default BtnFilter;
