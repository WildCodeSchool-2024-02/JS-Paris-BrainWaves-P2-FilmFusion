import axios from "axios";
import { useEffect, useState } from "react";
import "./Forumpost.css";
import { useNavigate } from "react-router-dom";

function Forumpost() {
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      )
      .then((response) => {
        setMovies(response.data.results);

        console.info(response.data.results);
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
          <p className="infopost">
            <div className="postcomposent">
              <p className="postdate">poster le 00/00/00</p>
              <button
                type="button"
                className="postbutton"
                onClick={() => handleMovieClick(movie.id)}
                onKeyDown={() => handleMovieClick()}
              >
                {" "}
                button
              </button>
            </div>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Forumpost;
