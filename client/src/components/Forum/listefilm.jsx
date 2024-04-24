import axios from "axios";
import { useEffect, useState } from "react";
import "./ListeFilm.css";

function ListeFilm() {
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";
  const [movies, setMovies] = useState([]);
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

  return (
    <div className="listcolor">
      <h1 className="listmovies">Liste des fillms</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          <p className="listfilms">{movie.title}</p>{" "}
        </div>
      ))}
    </div>
  );
}

export default ListeFilm;
