import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import LocationSearchPage from "../pages/LocationSearchPage";
import UserSearchResultPage from "../pages/UserSearchResultPage";
import NotFoundPage from "../pages/NotFoundPage";
import RoutePaths from "./RoutePaths";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route
          path={RoutePaths.home}
          element={
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          }
        />
        <Route
          path={RoutePaths.locationSearch}
          element={
            <HomeLayout>
              <LocationSearchPage />
            </HomeLayout>
          }
        />
        <Route
          path={RoutePaths.userSearchResults}
          element={
            <HomeLayout>
              <UserSearchResultPage />
            </HomeLayout>
          }
        />
        <Route path={RoutePaths.notFound} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
