import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "../components/SharedLayout";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route
              path="movies/:movieId"
              element={<MovieDetails />}
            >
              <Route index element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </SharedLayout>
        }
      />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default App;

