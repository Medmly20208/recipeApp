import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FoodItem = (props) => {
  const [disptitle, setdisptitle] = useState(false);
  const navigate = useNavigate();
  const handler = () => {
    navigate(
      `/recipeApp/id=${props.id}&name=${props.title}&img=${encodeURIComponent(
        props.image
      )}`,
      {
        replace: true,
      }
    );
  };

  return (
    <div
      style={{
        backgroundImage: `url('${props.image}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => setdisptitle(true)}
      onMouseLeave={() => setdisptitle(false)}
      className="overflow-hidden p-4 bg-cover rounded-2xl w-48 h-48 text-center cursor-pointer transition-all duration-300 flex flex-col justify-center alig-center "
      onClick={handler}
    >
      {disptitle == true ? (
        <h2 className="transition-all duration-300 text-black bg-white rounded-xl ">
          {props.title}
        </h2>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FoodItem;
