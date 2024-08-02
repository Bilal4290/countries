import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

const FilterMenu = ({setQuery}) => {
  
  const[dark] = useContext(ThemeContext)


  return (
    <>
      <div
        className={`shadow-md px-4 py-4 lg:py-6 max-w-[450px] w-[90%] sm:max-w-[300px] sm:w-[210px] md:w-[220px] bg-white lg:w-full ${
          dark ? "!bg-[#202C37] text-white " : ""
        }`}
      >
        <select className={`bg-white border-none outline-none pr-10 lg:pr-16 w-full  lg:text-xl xl:text-2xl font-medium ${
          dark ? "!bg-[#202C37] text-white " : ""
        }`} onChange={(e) => setQuery(e.target.value)}>
          <option value="" hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Ocencia">Ocencia</option>
        </select>
      </div>
    </>
  );
};

export default FilterMenu;
