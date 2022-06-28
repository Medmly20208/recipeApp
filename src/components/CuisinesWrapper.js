import React from "react";
import { customStyle } from "../App";
import { Link } from "react-router-dom";

const CuisinesWrapper = () => {
  return (
    <div className="flex flex-row content-center justify-center flex-wrap">
      <Link to="/Vietnamese">
        <h1 className={customStyle + " w-28 text-center"}>Vietnamese</h1>
      </Link>
      <Link to="/French">
        <h1 className={customStyle + " w-28 text-center"}>French</h1>
      </Link>
      <Link to="/Greek">
        <h1 className={customStyle + " w-28 text-center"}>Greek</h1>
      </Link>
      <Link to="/Thai">
        <h1 className={customStyle + " w-28 text-center"}>Thai</h1>
      </Link>
    </div>
  );
};

export default CuisinesWrapper;
