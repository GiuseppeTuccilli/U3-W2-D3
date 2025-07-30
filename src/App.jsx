//import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter.jsx";
import Center from "./Components/Center.jsx";
import Top from "./Components/Top.jsx";
import Profile from "./Components/Profile.jsx";
import Setting from "./Components/Setting.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralSection from "./Components/GeneralSection.jsx";
import GeneralSection2 from "./Components/GeneralSection2.jsx";
import MovieDetails from "./Components/MovieDetails.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route
            path="/TvShows"
            element={
              <>
                <Top text="Tv Shows" />
                <GeneralSection2 text="Trending Now" search="Twilight Zone" />
                <GeneralSection2
                  text="Watch it Again"
                  search="the walking dead"
                />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Top text="Home" />
                <GeneralSection2
                  text="Trending Now"
                  search="Lord of the rings"
                />
                <GeneralSection2 text="Watch it Again" search="Star Wars" />
                <GeneralSection2 text="New Releases" search="twilight zone" />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Top text="Movies" />
                <GeneralSection2 text="Trending Now" search="Star Wars" />
                <GeneralSection2 text="Watch it Again" search="stephen king" />
              </>
            }
          />

          <Route path="/details/:movId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>

      <MyFooter />
      {/*<Profile />*/}
      {/*<Setting />*/}
    </>
  );
}

export default App;
