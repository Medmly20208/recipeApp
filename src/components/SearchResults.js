import React, { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation().pathname;
  const SearchFood = location.split("/");
  const [result, setresults] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${SearchFood[2]}&number=10&apiKey=7329e16a85554beaaeb064d598fff4ad`
    )
      .then((res) => res.json())
      .then((finalresult) => {
        setresults(finalresult.results);
        setloading(false);
      });
  }, [SearchFood[2]]);

  return (
    <div className="flex flex-row justify-center align-center flex-wrap gap-6">
      {loading == true ? (
        <p>Loading</p>
      ) : result.length == 0 ? (
        <p>No results</p>
      ) : (
        result.map((element) => {
          return (
            <FoodItem
              title={element.title}
              image={element.image}
              id={element.id}
              key={element.id}
            ></FoodItem>
          );
        })
      )}
    </div>
  );
};

export default SearchResults;
