import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useOutletContext, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import DetailsShimmer from "./DetailsShimmer";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

const CountryDetails = () => {
  const [data, setData] = useState(null);
  const [notFound, setNotfound] = useState(false);
  const params = useParams();
  const countryName = params.country;
  const  [dark] = useContext(ThemeContext)
  
  useEffect(() => {
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((response) => response.json())
      .then(([data]) => {
        setData({
          url: data.flags.svg,
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population?.toLocaleString("en-IN"),
          region: data.region,
          subRegion: data.subregion,
          capital: data.capital?.join(", "),
          tld: data.tld?.join(", "),
          currencies: Object.values(data.currencies)
            .map((curr) => curr.name)
            .join(", "),
          languages: Object.values(data.languages)?.join(", "),
          borders: [],
        });

      

     data.borders?.map( (border) => {
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((response) => response.json())
      .then(([borderData]) => {
        setData((previousStat) => ({...previousStat, borders : [...previousStat.borders,borderData.name.common]}))
      })
     })  


   })
      .catch((err) => {
        setNotfound(true);
      });
  }, [countryName]);


  if (notFound) {
    return (
      <p className="text-center font-bold pt-10 text-xl">Country Not Found</p>
    );
  }

  return (
    <>
      {data === null ? (
        <DetailsShimmer />
      ) : (
        <main className="min-h-[calc(100vh-104.8px)]">
          <div
            id="btnDiv"
            className={`sm:px-20 px-10 pt-10 xl:pt-20 max-w-[1440px] mx-auto  ${
              dark ? "bg-[hsl(207,26%,17%)] text-white " : ""
            }`}
          >
            <button
              onClick={() => history.back()}
              className=" text-base sm:text-xl xl:text-3xl font-semibold  border-black border-2 px-2 sm:px-4 xl:px-6 py-1 sm:py-2 flex gap-2 sm:gap-4 items-center"
            >
              <span>
                {" "}
                <FaLongArrowAltLeft />{" "}
              </span>
              <span className=""> Back </span>
            </button>
          </div>

          <section className={`max-w-[1440px]  mx-auto px-10 lg:px-20 pt-10 sm:pt-12 lg:pt-20 flex flex-col xl:flex-row items-start  sm:items-center xl:items-start pb-40   ${
          dark ? "bg-[hsl(207,26%,17%)] text-white " : ""
        }`}>
            <div
              id="imageDiv"
              className=" w-full sm:w-[450px] lg:w-[600px] xl:w-full"
            >
              <img className=" w-full " src={data.url} alt="" />
            </div>

            <div id="textDiv" className="pt-10  xl:pl-16 w-full">
              <h2 className="text-4xl font-bold pb-5">{data.name}</h2>
              <div id="dataDiv" className="flex flex-col sm:flex-row justify-between" >
                <div id="part1" className="text-lg font-medium basis-[50%]">
                  <h3 className="">
                    Native Name :{" "}
                    <span className="font-normal"> {data.nativeName} </span>{" "}
                  </h3>
                  <h3 className="">
                    Population :{" "}
                    <span className="font-normal"> {data.population} </span>
                  </h3>
                  <h3 className="">
                    Region :{" "}
                    <span className="font-normal"> {data.region} </span>
                  </h3>
                  <h3 className="">
                    Sub Region :{" "}
                    <span className="font-normal"> {data.subRegion} </span>
                  </h3>
                  <h3 className="">
                    Capital :{" "}
                    <span className="font-normal"> {data.capital} </span>
                  </h3>
                </div>
                <div id="part2" className="text-lg font-medium basis-[50%]">
                  <h3 className="">
                    Top Level Domain :{" "}
                    <span className="font-normal"> {data.tld} </span>
                  </h3>
                  <h3 className="">
                    Currencies :{" "}
                    <span className="font-normal"> {data.currencies} </span>
                  </h3>
                  <h3 className="">
                    Languages :{" "}
                    <span className="font-normal"> {data.languages} </span>
                  </h3>
                </div>
              </div>

              {/* {data.borders.length ? (
                <div className="text-lg flex gap-2   font-medium pt-12">
                  <span className="inline-block xl:basis-[30%]">
                    Border Countries :
                  </span>
                  
                  <span className="font-normal inline-flex gap-4 flex-wrap pl-4 xl:pl-0 xl:basis-[70%]">
                    {" "}
                    {data.borders?.map((border, i) => {
                      return (
                        <Link
                          className="shadow-lg px-6 py-2 text-sm font-semibold lg:text-lg border-2 border-gray  lg:font-bold"
                          key={i}
                          to={`/${border}`}
                        >
                          {border}
                        </Link>
                      );
                    })}{" "}
                  </span>
                </div>
              ) : (
                ""
              )} */}
              {data.borders.length ? (
                <div className="pt-12 flex gap-2 flex-wrap">
                  <span className="text-xl font-medium">
                    Border Countries :
                  </span>
                  
                  <span className="flex flex-wrap">
                    {" "}
                    {data.borders?.map((border, i) => {
                      return (
                        <Link
                          className="shadow-lg m-4 px-6 py-2 border-2 font-medium border-gray"
                          key={i}
                          to={`/${border}`}
                        >
                          {border}
                        </Link>
                      );
                    })}{" "}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default CountryDetails;
