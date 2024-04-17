import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./pages/Accueil";
import Categorie from "./pages/Categorie";
import FilmTemplate from "./pages/FilmTemplate";
import ForumAccueil from "./pages/ForumAccueil";
import ForumFilm from "./pages/ForumFilm";

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
        path: "/filmTemplate",
        element: <FilmTemplate />,
      },
      {
        path: "/forumAccueil",
        element: <ForumAccueil />,
      },
      {
        path: "/forumFilm",
        element: <ForumFilm />,
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
