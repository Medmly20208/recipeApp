import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import FoodItem from "./FoodItem";
import { customStyle } from "../App";
import LoadingSpinner from "./LoadingSpinner";
import "@splidejs/react-splide/css/core";
const Trending = () => {
  const [Trending, setTtrending] = useState([]);
  const [Loading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetch(
      "https://api.spoonacular.com/recipes/random?tags=vegetarian&number=10&apiKey=7329e16a85554beaaeb064d598fff4ad"
    )
      .then((res) => res.json())
      .then((finalresult) => {
        setTtrending(finalresult.recipes);
        setisLoading(false);
      });
  }, []);
  return (
    <section>
      <h1 className={customStyle + " cursor-default hover:bg-bright-blue"}>
        Top Vegeterian
      </h1>
      <div>
        {Loading == true ? (
          <LoadingSpinner />
        ) : (
          <Splide
            options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "5rem",
              breakpoints: {
                937: {
                  perPage: 3,
                },
                721: {
                  perPage: 2,
                },
                470: {
                  perPage: 1,
                  gap: "1rem",
                },
              },
            }}
          >
            {Trending.map((Food) => {
              return (
                <SplideSlide>
                  <FoodItem
                    title={Food.title}
                    image={Food.image}
                    id={Food.id}
                    key={Food.id}
                  ></FoodItem>
                </SplideSlide>
              );
            })}
          </Splide>
        )}
      </div>
    </section>
  );
};

export default Trending;
