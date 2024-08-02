import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

const SearchMenu = ({ setQuery }) => {
  const [dark] = useContext(ThemeContext);

  return (
    <>
      <div
        className={`flex gap-5 items-center shadow-md max-w-[500px] w-[90%] sm:w-[45%] md:w-[40%] xl:w-full bg-white p-4 lg:p-6 ${
          dark ? "!bg-[hsl(207,26%,17%)]" : ""
        }`}
      >
        <span
          className={`text-xl lg:text-2xl xl:text-4xl ${
            dark ? "bg-[hsl(207,26%,17%)] text-white" : ""
          }`}
        >
          {" "}
          <IoSearch />{" "}
        </span>
        <input
          type="text"
          name=""
          id=""
          className={`border-none outline-none lg:text-2xl xl:text-3xl ${
            dark ? "bg-[hsl(207,26%,17%)] text-white " : ""
          }`}
          placeholder="Search for a country..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchMenu;
