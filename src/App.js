import CuisinesWrapper from "./components/CuisinesWrapper";
import "./App.css";
import React from "react";
import Main from "./components/Main";
import { Link } from "react-router-dom";
import Search from "./components/Search";

export const customStyle =
  "m-4 bg-bright-blue text-white p-4 w-fit rounded-3xl cursor-pointer hover:bg-medium-blue";
function App() {
  return (
    <React.Fragment>
      <header>
        <Link to="/">
          <h1 className={customStyle}>BEST APP RECIPE</h1>
        </Link>
      </header>
      <CuisinesWrapper></CuisinesWrapper>
      <Search></Search>
      <Main></Main>
    </React.Fragment>
  );
}

export default App;
