import TrendingSection from "./TrendingSection";
import GeneralSection from "./GeneralSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "../Components/Top.jsx";

const Center = function () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/TvShows"
            element={
              <>
                <Top text="Tv Shows" />
                <GeneralSection text="Trending Now" search="Twilight Zone" />
                <GeneralSection
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
                <GeneralSection
                  text="Trending Now"
                  search="Lord of the rings"
                />
                <GeneralSection text="Watch it Again" search="Star Wars" />
                <GeneralSection text="New Releases" search="twilight zone" />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Top text="Movies" />
                <GeneralSection text="Trending Now" search="Star Wars" />
                <GeneralSection
                  text="Watch it Again"
                  search="Lord of the rings"
                />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Center;
