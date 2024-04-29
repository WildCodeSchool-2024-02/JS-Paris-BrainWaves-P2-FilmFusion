import axios from "axios";
import { useEffect, useState } from "react";
import "./Forumpost.css";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

function Forumpost() {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    axios
      .get(
        `
        ${apiUrl}/movie/popular?api_key=${apiKey}`
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  const navigate = useNavigate();
  const handleMovieClick = (movieId) => {
    navigate(`/forumFilm`, {
      state: {
        mId: movieId,
      },
    });
  };

  return (
    <div className="post">
      {movies.map((movie) => (
        <div className="postforum" key={movie.id}>
          <h1 className="titlepost">{movie.title}</h1>
          <div className="postpost">
            <img
              className="imageforumpost"
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt="poster_movie"
            />
            <p className="compost">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              aliquam, libero fugit impedit temporibus eaque alias debitis quas,
              eius illo velit, inventore eveniet commodi sapiente dolore
              repellat odio soluta ratione.
            </p>
          </div>
          <div className="postcomposent">
            <p className="postdate">posted on 10/ 05/ 24</p>
            <button
              type="button"
              className="postbutton"
              onClick={() => handleMovieClick(movie.id)}
              onKeyDown={() => handleMovieClick()}
            >
              {" "}
              Chat
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Forumpost;
