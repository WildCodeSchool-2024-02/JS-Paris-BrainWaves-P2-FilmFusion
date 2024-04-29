import axios from "axios";
import { useEffect, useState } from "react";
import "./Forumpost.css";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

function Forumpost() {
  const [movies, setMovies] = useState([]);
  const [comments, setComments] = useState({});

  const getMovies = () => {
    axios.get(`${apiUrl}/discover/movie?api_key=${apiKey}`).then((response) => {
      setMovies(response.data.results);

      response.data.results.forEach((movie) => {
        axios
          .get(`${apiUrl}/movie/${movie.id}/reviews?api_key=${apiKey}`)
          .then((reviewsResponse) => {
            if (reviewsResponse.data.results.length > 0) {
              setComments((prevState) => ({
                ...prevState,
                [movie.id]: reviewsResponse.data.results[0],
              }));
            }
          });
      });
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
              {comments[movie.id] && (
                <div>
                  <p>{comments[movie.id].content}</p>
                </div>
              )}
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
