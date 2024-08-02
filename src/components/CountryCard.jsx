import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ url, name, population, region, capital, cardData }) => {
  // console.log(capital.join(", "));
  // console.log(capital);
  return (
    <>
      <Link
        to={`/${name}`}
        className="shadow-lg sm:h-[450px] sm:w-[280px]"
        // state={cardData}
      >
        <div id="imageDiv" className="sm:w-full sm:h-[200px] ">
          <img
            className="w-full h-full object-cover object-center"
            src={url}
            alt=""
          />
        </div>
        <div id="textDiv" className="sm:h-[200px] sm:w-full px-4 py-6">
        <h2 className="font-semibold text-3xl mb-4 ">{name}</h2>
          <p className="text-xl font-semibold">
            Population :
            <span className="font-normal text-xl"> {population} </span>
          </p>
          <p className="text-xl font-semibold">
            Region : <span className="font-normal text-xl">{region}</span>
          </p>
          <p className="text-xl font-semibold">
            Capital :{" "}
            <span className="font-normal text-xl">
              {(capital || []).join(", ")}
            </span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default CountryCard;
