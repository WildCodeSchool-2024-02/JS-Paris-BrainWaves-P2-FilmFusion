/* eslint-disable import/no-unresolved */
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

function Top20Film() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getMovies = () => {
    axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}`).then((response) => {
      setMovies(response.data.results);

    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/film/${movieId}`);
  };

  return (
    <div className="list-swiper">
      <h1 className="titleMovieBar">Top 20</h1>

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
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              onClick={() => handleMovieClick(movie.id)}
              onKeyDown={() => handleMovieClick(movie.id)}
              role="presentation"
              className="imagemovie"
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt="poster_movie"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Top20Film;
