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

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

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
          axios.get(`${apiUrl}/movie/${params.id}?api_key=${apiKey}`),
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
