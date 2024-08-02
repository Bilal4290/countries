=>   How to implement Search Functionality ?

       (1) Implementing Search Functionality by Lifting up the State :

            1.  First you have to make a state in parent component.
            2.  Now state provides you two things :
                 (1) query
                 (2) setQuery

            3.  query should be passed to those child component where data is fetching and card is rendering.
                   CountryData.filter((country) => country.name.common.toLowerCase().includes(query))

            4.  setQuery should be passed to those child component which has input field.
                    In input field you have onChange function.
                         onChange((e) => setQuery(e.target.value))


=>   Note : 

         UseState hook is used to create a state.
         UseEffect hook is used to monitor a state.
         

=>   Creating Error Page :

        You can use a hook useRouteError() to create an error page.

            const error = useRouteError()

=>   Dynamic Routing in React :

       For dynamic routing,implements the following things:
           (1)  Go to the route path and make it dynamic by putting the colon(:) after '/'.
                     path : "/:country"

           (2)  Now fetch the url parameter by a hook.
                   
                   const params = useParams()    //  Returns an object.
                   const countryName = params.country

           (3)  Handle the error if a country not exists, after then implements catch.
                   1.  Make a state:
                       const [notFound,setNotFound] = useState(false)

                   2. In catch make this state true:
                       .catch((error) => {
                          setNotFound(true)
                       })
                    
                   3.  if(notFound){
                           return <p>Country Not Found</p>
                       }


=>   State in Link and useLocation hook / How to pass data from one page to another page in react :


           Link tag mai hum state ko use kar k aik page se dosray page mai data send kar saktay hain..
           Aur jis page par link jata hai us par hum use location k through us state ko access kar saktay hain..

           <Link to="/country" state={{ key : value...}}> </Link>

           /country mai hum is state ko access kar saktay hain...

           const location = useLocation()
           const state = location.state




=>   UseOutletContext hook :

            useOutletContext is a hook provided by React Router to access context data passed from a parent route to its child routes. It's useful when working with nested routes and you need to pass data to the child routes.


         =>  Parent Route Component :

                import React from 'react';
                import { Outlet } from 'react-router-dom';

                const ParentComponent = () => {
                  const contextValue = { user: "John Doe", theme: "dark" };
                
                  return (
                    <div>
                      <h1>Parent Component</h1>
                      <Outlet context={contextValue} />
                    </div>
                  );
                };

                export default ParentComponent;


        =>  Child Route Component : 

                 import React from 'react';
                 import { useOutletContext } from 'react-router-dom';

                 const ChildComponent = () => {
                   const { user, theme } = useOutletContext();

                   return (
                     <div>
                       <h2>Child Component</h2>
                       <p>User: {user}</p>
                       <p>Theme: {theme}</p>
                     </div>
                   );
                 };

                 export default ChildComponent;



=>   Context Api in React : 

        To avoid the problem of prop drilling, we use Context Api.

         
=>   How to create a context ? 

         First make a folder 'context'.
         Inside context folder, make a file 'ThemeContext.js'.


         =>  ThemeContext.js File : 

                 import { createContext } from 'react'

                 export const ThemeContext = createContext('Context Value')   // This value is shown if we not provide value in <ThemeContext.provider>. And if we  not provide any value in this, then it gives undefined.  
        
=>   How to use context in any component ?

         For this, you have to use a hook named 'useContext'

         const theme = useContext(ThemeContext)   // import ThemeContext

         <ThemeContext.Provider value = "Provider Value">  // Now it overwrites the context value.
         </ThemeContext.Provider>


          If i don't want to make state in component where i am using Context, so i create a function in Context file and in this function i'll create state.


          function ThemeProvider ({children}){
               const [dark,setDark] = useState(JSON.parse(localStorage.getItem('isDark')))

               return (
                <ThemeContext.Provider value={[dark,setDark]}>
                  {children}
                <ThemeContext.Provider>
               )
          }