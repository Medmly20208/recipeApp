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
      <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-70 z-[-1]"></div>
      <Search></Search>
    </React.Fragment>
  );
}

export default App;
