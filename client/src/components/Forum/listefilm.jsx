import axios from "axios";
import { useEffect, useState } from "react";
import "./ListeFilm.css";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

function ListeFilm() {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    axios
      .get(`${apiUrl}/discover/movie?api_key=${apiKey}`)
      .then((response) => {
        setMovies(response.data.results);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="listcolor">
      <h1 className="listmovies">Movie lists</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          <p className="listfilms">{movie.title}</p>{" "}
        </div>
      ))}
    </div>
  );
}

export default ListeFilm;
