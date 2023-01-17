import "./App.css";
import React from "react";

import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import FoodDetails from "./components/FoodDetails";

import { Routes, Route } from "react-router-dom";

export const customStyle =
  "m-4 bg-[#212121] text-white p-4 w-fit rounded-3xl cursor-pointer hover:bg-[#616161]";
function App() {
  return (
    <React.Fragment>
      <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-70 z-[-1]"></div>
      <Search></Search>
      <Routes>
        <Route path="/recipeApp/search/:name" element={<SearchResults />} />
        <Route path="/recipeApp/:id" element={<FoodDetails />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
