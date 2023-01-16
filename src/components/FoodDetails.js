import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Summary from "./Summary";
import { customStyle } from "../App";
import { Bars } from "react-loader-spinner";

const FoodDetails = () => {
  const l = useLocation().pathname;
  const pathName = l.slice("/recipeApp/".length, l.length);
  const j = new URLSearchParams(pathName);
  const name = new URLSearchParams(pathName);

  const [FoodIngerdient, setFoodIngerdient] = useState([]);
  const [Loading, setisLoading] = useState(false);
  const [dipssummary, setdispsummary] = useState(false);
  useEffect(() => {
    setisLoading(true);
    fetch(
      `https://api.spoonacular.com/recipes/${j.get(
        "id"
      )}/ingredientWidget.json?apiKey=7329e16a85554beaaeb064d598fff4ad`
    )
      .then((res) => res.json())
      .then((finalresult) => {
        setFoodIngerdient(finalresult.ingredients);
        setisLoading(false);
      });
  }, []);
  const summaryHandler = () => {
    setdispsummary(true);
  };
  const ingredientsHandler = () => {
    setdispsummary(false);
  };
  return (
    <div className="w-full  p-4 ">
      {Loading == true ? (
        <Bars
          height="80"
          width="80"
          color="white"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <div className="min-h-[500px] p-8  rounded-2xl bg-white flex flex-col align-center gap-8  justify-center items-center">
          <div className="flex flex-row justify-center">
            <button
              className={`${customStyle} ${!dipssummary ? " opacity-80" : ""}`}
              onClick={ingredientsHandler}
            >
              Ingredients
            </button>
            <button
              className={`${customStyle} ${dipssummary ? " opacity-80" : ""}`}
              onClick={summaryHandler}
            >
              Summary
            </button>
          </div>
          <div className="flex flex-row flex-wrap gap-10 w-full h-full justify-around items-start">
            <div className="w-[100%] sm:w-[40%]">
              <img
                src={j.get("img")}
                className=" max-h-[300px] rounded-3xl border-1 border-black"
              ></img>
            </div>
            <div className="w-[100%] sm:w-[50%] max-h-[300px] overflow-y-scroll ">
              {dipssummary == true ? (
                <Summary j={j}></Summary>
              ) : (
                <ul className="list-disc">
                  {j.get("name")}
                  {FoodIngerdient.map((element) => {
                    return (
                      <li>
                        {element.name}{" "}
                        {element.amount.metric.value +
                          element.amount.metric.unit}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
