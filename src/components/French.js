import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";
import LoadingSpinner from "./LoadingSpinner";
const French = () => {
  const [Food, setFood] = useState([]);
  const [Loading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetch(
      `https://api.spoonacular.com/recipes/random?cuisine=french&number=10&apiKey=7329e16a85554beaaeb064d598fff4ad`
    )
      .then((res) => res.json())
      .then((finalresult) => {
        setFood(finalresult.recipes);
        setisLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-row justify-center align-center flex-wrap gap-6">
      {Loading == true ? (
        <LoadingSpinner />
      ) : (
        Food.map((Foodi) => {
          return (
            <FoodItem
              title={Foodi.title}
              image={Foodi.image}
              id={Foodi.id}
              key={Foodi.id}
            ></FoodItem>
          );
        })
      )}
    </div>
  );
};

export default French;
