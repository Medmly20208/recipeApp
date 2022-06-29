import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const inptref = useRef();
  const navigate = useNavigate();
  const handler = (event) => {
    event.preventDefault();
    navigate(`recipeApp/search/${inptref.current.value}`);
  };
  return (
    <div className="flex flex-row justify-center align-center items-baseline mb-24">
      <form onSubmit={handler} className="flex flex-row items-baseline">
        <input
          type="text"
          ref={inptref}
          className="p-2 w-32 h-8 bg-bright-blue text-white border-none outline-none rounded-2xl"
        ></input>

        <button
          className={
            "bg-bright-blue w-24 h-8 m-4 m-4 text-white rounded-2xl hover:bg-medium-blue"
          }
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Search;
