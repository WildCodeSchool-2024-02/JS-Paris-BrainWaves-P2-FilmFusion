import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Accueil from "./pages/Accueil";
import Categorie from "./pages/Categorie";
import FilmTemplate from "./pages/FilmTemplate";
import ForumAccueil from "./pages/ForumAccueil";
import ForumFilm from "./pages/ForumFilm";
import SearchBarMobile from "./pages/SearchBarMobile/SearchBarMobile";

const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/categorie",
        element: <Categorie />,
      },
      {
        path: "/categorie/:categoryid",
        element: <Categorie />,
      },
      {
        path: "/film/:id",
        element: <FilmTemplate />,
        loader: ({ params }) =>
          axios.get(
            `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
          ),
      },
      {
        path: "/forumAccueil",
        element: <ForumAccueil />,
      },
      {
        path: "/forumFilm",
        element: <ForumFilm />,
      },
      {
        path: "/searchBarMobile",
        element: <SearchBarMobile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
