import React, { useRef, useState } from "react";

//iconify
import { Icon } from "@iconify/react";

// react router
import { useNavigate } from "react-router-dom";

const Search = () => {
  const inptref = useRef();
  const navigate = useNavigate();
  const handler = (event) => {
    event.preventDefault();
    navigate(`/recipeApp/search/${inptref.current.value}`);
  };
  return (
    <div className="text-center w-full flex justify-center align-center text-white flex-col h-screen">
      <h1 className="text-[40px] font-bold">
        Find Best Recipes for your desired food
      </h1>
      <div className="flex justify-center items-center mt-5">
        <div className="p-6 flex justify-center items-center gap-4 bg-white text-black w-[300px] h-[30px]">
          <form >
            <input
              type="text"
              ref={inptref}
              className="border-none border-[0px] outline-none font-serif text-[20px]"
            ></input>
          </form>
          <Icon
            onClick={handler}
            icon="ic:baseline-search"
            style={{
              fontSize: "40px",
              cursor: "pointer",
              color: "black",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
