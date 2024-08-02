import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {

  const error = useRouteError();
  console.log(error);

  return (
    <>
      <div className='h-[100vh]'>
      <div id="error-page" className='flex flex-col justify-center items-center gap-4 h-full text-lg sm:text-2xl lg:text-3xl font-medium '>
         <h1>Oops!</h1>
         <p>Sorry, an unexpected error has occurred.</p>
         <p>
           <i>{error.statusText || error.message}</i>
         </p>
      </div>
      </div>
    </>
  )
}

export default Error