import axios from "axios";
import { useEffect, useState } from "react";
import "./ListeFilm.css";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

function ListeFilm() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getMovies = () => {
    axios.get(`${apiUrl}/discover/movie?api_key=${apiKey}`).then((response) => {
      setMovies(response.data.results);
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/forumFilm`, {
      state: {
        mId: movieId,
      },
    });
  };

  return (
    <div className="listcolor">
      <h1 className="listmovies">Movie lists</h1>
      {movies.map((movie) => (
        <div
          type="button"
          role="presentation"
          key={movie.id}
          onClick={() => handleMovieClick(movie.id)}
          onKeyDown={() => handleMovieClick(movie.id)}
        >
          <p className="listfilms">{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ListeFilm;
