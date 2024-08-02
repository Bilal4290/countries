import React from 'react'
import { Link } from 'react-router-dom';

const DetailsShimmer = () => {
  return (
    <>
       
       <main>
          <div id="btnDiv"
            className="sm:px-20 px-10 pt-10 xl:pt-20 max-w-[1440px] mx-auto"
          >
            <button className=" text-base sm:text-xl xl:text-3xl font-semibold  border-2 px-2 sm:px-4 xl:px-6 py-1 sm:py-2 flex gap-2 sm:gap-4 items-center h-[35px] w-[77px] sm:h-[45px] sm:w-[110px] md:h-[55px] md:w-[135px] bg-gray-300 animate-pulse" > 
           
            </button>
          </div>

          <section className="max-w-[1440px]  mx-auto px-10 lg:px-20 pt-10 sm:pt-12 lg:pt-20 flex flex-col xl:flex-row items-start  sm:items-center xl:items-start pb-40 animate-pulse">
            <div id="imageDiv" className=" shadow-lg w-full sm:w-[450px] lg:w-[600px] xl:w-full bg-gray-300 animate-pulse h-[300px] sm:h-[450px] lg:h-[600px] xl:h-[543px] " >       
            </div>

            <div id="textDiv" className="  pt-10  xl:pl-16 w-full  ">
               <h2 className="bg-gray-300 animate-pulse h-[50px] shadow-lg w-[50%] mb-5"></h2>

               <div id="dataDiv" className="flex flex-col sm:flex-row justify-between gap-8" >
                  <div id="part1" className="text-lg font-medium basis-[50%]">
                        <h3 className='h-[24px] bg-gray-300 animate-pulse mb-2'></h3>
                        <h3 className='h-[24px] bg-gray-300 animate-pulse mb-2'></h3>
                        <h3 className='h-[24px] bg-gray-300 animate-pulse mb-2'></h3>
                        <h3 className='h-[24px] bg-gray-300 animate-pulse mb-2'></h3>
                        <h3 className='h-[24px] bg-gray-300 animate-pulse mb-2'></h3>
                  </div>
                  <div id="part2" className="text-lg font-medium basis-[50%]">
                        <h3 className='h-[24px] bg-gray-300 animate-pulse mb-2'></h3>
                        <h3 className='h-[24px] bg-gray-300 animate-pulse mb-2'></h3>
                        <h3 className='h-[24px] bg-gray-300 animate-pulse mb-2'></h3>
                  </div>
                </div>

                <div className="text-lg flex gap-2   font-medium pt-12">
                  <span className="inline-block xl:basis-[30%] h-[24px] bg-gray-300 animate-pulse"></span>
                  
                  <span className="font-normal inline-flex gap-4 flex-wrap pl-4 xl:pl-0 xl:basis-[70%]">
                   
                    {Array.from({length : 5}).map((data,index) => {
                      return (
                        <Link
                          className="shadow-lg px-6 py-3 text-lg border-2 border-gray h-[24px] bg-gray-300 animate-pulse  font-bold"
                          key={index}     
                        >
                         
                        </Link>
                      );
                    })}
                  </span>
                </div>


            </div>
          </section>
        </main>

    </>
  )
}

export default DetailsShimmer