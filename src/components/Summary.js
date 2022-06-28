import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
const Summary = (props) => {
  const [isLoading, setisLoadingsummary] = useState(false);
  const [summary, setsummary] = useState();

  let l;
  useEffect(() => {
    setisLoadingsummary(true);
    fetch(
      `https://api.spoonacular.com/recipes/${props.j.get(
        "id"
      )}/summary?apiKey=7329e16a85554beaaeb064d598fff4ad`
    )
      .then((res) => res.json())
      .then((finalresult) => {
        setsummary(finalresult.summary);
        setisLoadingsummary(false);
      });
  }, []);
  return (
    <div>
      {isLoading == true ? (
        <LoadingSpinner />
      ) : (
        <React.Fragment>
          <div className="flex flex-row justify-center items-center align-center gap-8">
            <div dangerouslySetInnerHTML={{ __html: summary }}></div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Summary;
