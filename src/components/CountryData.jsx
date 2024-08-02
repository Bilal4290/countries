import React, { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryShimmer from "./CountryShimmer";

const CountryData = ({ query }) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        return setCountryData(data);
      });
  }, []);

  return (
    <>
     { !countryData.length ? (<CountryShimmer />) :(
      <section className="max-w-[1440px] mx-auto px-10  sm:px-5  md:px-0 lg:px-10 pt-10 sm:pt-12 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center min-h-[74vh]">
        {countryData &&
          countryData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query.toLowerCase()) || country.region.toLowerCase().includes(query.toLowerCase())
            )
            .map((cardData, id) => {
              return (
                <CountryCard
                  url={cardData.flags.svg}
                  name={cardData.name.common}
                  population={cardData.population}
                  region={cardData.region}
                  capital={cardData.capital}
                  key={id}
                  cardData={cardData}
                />
              );
            })}
      </section> 
)
}
    </>
  );
};

export default CountryData;
