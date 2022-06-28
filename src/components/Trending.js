import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import FoodItem from "./FoodItem";
import { customStyle } from "../App";
import "@splidejs/react-splide/css/core";
import LoadingSpinner from "./LoadingSpinner";

const Trending = () => {
  const [Trending, setTtrending] = useState([]);
  const [Loading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetch(
      "https://api.spoonacular.com/recipes/random?number=10&apiKey=7329e16a85554beaaeb064d598fff4ad"
    )
      .then((res) => res.json())
      .then((finalresult) => {
        setTtrending(finalresult.recipes);
        setisLoading(false);
      });
  }, []);
  return (
    <section className="mt-12">
      <h1 className={customStyle + " cursor-default hover:bg-bright-blue"}>
        Trending
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
