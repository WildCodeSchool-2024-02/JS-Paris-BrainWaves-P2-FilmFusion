import { useState, useEffect } from "react";
import axios from "axios";
import "./movieBar.css";

function Top20Film() {
  const [movies, setMovies] = useState([]);
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";

  const getMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
      .then((response) => {
        setMovies(response.data.results);
        console.info(response.data.results);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleMovieClick = (movieId) => {
    console.info("Clicked ID:", movieId);
  };

  return (
    <div>
      <h1 className="titlleMoviebar">Top 20</h1>
      <ul className="postermovie">
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              onClick={() => handleMovieClick(movie.id)}
              onKeyDown={() => handleMovieClick(movie.id)}
              role="presentation"
              className="imagemovie"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt="poster_movie"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Top20Film;

