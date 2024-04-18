import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBarGenres from "../components/CategorieComponents/SideBarGenres";
import SideBarAge from "../components/CategorieComponents/SideBarAge";
import SideBarDuration from "../components/CategorieComponents/SideBarDuration";
import "./Categorie.css";

function Categorie() {
  const { id } = useParams();
  const [urlCategorie, setUrlCategorie] = useState([]);
  const [genres, setGenres] = useState();
  const navigate = useNavigate();

  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=${apiKey}`;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setUrlCategorie(response.data.results);
      })
      .catch((err) => console.error(err));
  }, [url]);

  const handleMovieClick = (movieId) => {
    navigate(`/film/${movieId}`);
  };

  const category = genres?.find((genre) => genre.id.toString() === id);

  return (
    <div>
      <div className="en-tete">
        <h1 className="titre-container">{category?.name}</h1>
      </div>
      <div className="display-page">
        <div className="display-movies">
          {urlCategorie?.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleMovieClick(movie.id)}
              onKeyDown={() => handleMovieClick(movie.id)}
              role="presentation"
              className="image-movie"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt="img-film"
            />
          ))}
        </div>
        <div className="side-bar">
          <SideBarGenres />
          <SideBarAge />
          <SideBarDuration />
        </div>
      </div>
    </div>
  );
}

export default Categorie;
