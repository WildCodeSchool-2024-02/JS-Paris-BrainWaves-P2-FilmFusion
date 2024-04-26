/* eslint-disable import/no-unresolved */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./movieBar.css";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

function Recommendations({ movie }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = () => {
      axios
        .get(
          `${apiUrl}/movie/${movie.data.id}/recommendations?api_key=${apiKey}&with_genres=12`
        )
        .then((response) => {
          setMovies(response.data.results);
        });
    };
    getMovies();
  }, [movie]);

  const handleMovieClick = (movieId) => {
    navigate(`/film/${movieId}`);
  };

  return (
    <div className="list-swiper">
      <h1 className="titleMovieBar">Recommendations</h1>

      <Swiper
        navigation
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          1200: { slidesPerView: 8, spaceBetween: 20 },
          770: { slidesPerView: 6, spaceBetween: 20 },
          425: { slidesPerView: 4, spaceBetween: 20 },
          320: { slidesPerView: 3, spaceBetween: 20 },
          280: { slidesPerView: 2, spaceBetween: 20 },
        }}
      >
        {movies.map((movieData) => (
          <SwiperSlide key={movieData.id}>
            <img
              onClick={() => handleMovieClick(movieData.id)}
              role="presentation"
              className="imagemovie"
              src={`https://image.tmdb.org/t/p/w400${movieData.poster_path}`}
              alt={movieData.title || "Movie Poster"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

Recommendations.propTypes = {
  movie: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Recommendations;
