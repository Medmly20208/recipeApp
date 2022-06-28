import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Summary from "./Summary";
import { customStyle } from "../App";
import LoadingSpinner from "./LoadingSpinner";

const FoodDetails = () => {
  const l = useLocation().pathname;
  const pathName = l.slice(1, l.length);
  console.log("l", pathName);
  const j = new URLSearchParams(pathName);
  console.log("id=", j.get("id"));
  const name = new URLSearchParams(pathName);
  console.log("name=", j.get("name"));
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
  console.log(FoodIngerdient);
  const summaryHandler = () => {
    setdispsummary(true);
  };
  const ingredientsHandler = () => {
    setdispsummary(false);
  };
  return (
    <div>
      {Loading == true ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col align-center gap-8 items-center mly-custom:flex-row justify-center items-center  ">
          <img src={j.get("img")} className="w-72 h-72 rounded-3xl "></img>

          <div>
            <div className="flex flex-row justify-center">
              <button className={customStyle} onClick={ingredientsHandler}>
                Ingredients
              </button>
              <button className={customStyle} onClick={summaryHandler}>
                Summary
              </button>
            </div>
            <div>
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
