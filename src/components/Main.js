import React from "react";
import Trending from "./Trending";
import TopPicks from "./TopPicks";
import { Routes, Route } from "react-router-dom";
import FoodDetails from "./FoodDetails";
import Thai from "./Thai";
import French from "./French";
import Vitenamese from "./Vitenamese";
import Greek from "./Greek";
import SearchResults from "./SearchResults";

const Main = () => {
  return (
    <main className="m-4">
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Trending></Trending>
              <TopPicks></TopPicks>
            </React.Fragment>
          }
        ></Route>
        <Route path="/Vietnamese" element={<Vitenamese></Vitenamese>}></Route>
        <Route path="/French" element={<French />}></Route>
        <Route path="/Greek" element={<Greek />}></Route>
        <Route path="/Thai" element={<Thai />}></Route>
        <Route
          path="/search/:FoodName"
          element={<SearchResults></SearchResults>}
        ></Route>
        <Route path="/:FoodId" element={<FoodDetails></FoodDetails>}></Route>
      </Routes>
    </main>
  );
};

export default Main;
