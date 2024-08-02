import React from "react";
import { Link } from "react-router-dom";

const CountryShimmer = () => {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-10  sm:px-5  md:px-0 lg:px-10 pt-10 sm:pt-12 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center ">
        {Array.from({ length: 150 }).map((arr, i) => {
          return (
            <Link
              className="shadow-lg w-full sm:h-[450px] sm:w-[280px]"
              key={i} >

               <div id="imageDiv" className=" w-[300px] h-[150px] sm:w-full sm:h-[200px] bg-gray-300 animate-pulse "> 
               </div>

               <div id="textDiv" className="sm:h-[200px] sm:w-full px-4 py-6">
                 
                    <h2 className="font-semibold text-3xl mb-4 w-[80%] h-[34px] bg-gray-300 animate-pulse "></h2>

                    <p className="w-[60%] bg-gray-300 animate-pulse h-[28px] mb-3"></p>
                    <p className="w-[60%] bg-gray-300 animate-pulse h-[28px] mb-3"></p>
                    <p className="w-[60%] bg-gray-300 animate-pulse h-[28px] mb-3"></p>


               </div>


            </Link>
          );
        })}
      </section>
    </>
  );
};

export default CountryShimmer;
