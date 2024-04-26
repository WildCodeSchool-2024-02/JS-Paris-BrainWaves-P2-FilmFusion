/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./movieBar.css";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

function Category() {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const navigate = useNavigate();

  const getGenres = () => {
    axios
      .get(`${apiUrl}/genre/movie/list?api_key=${apiKey}`)
      .then((response) => {
        setGenres(response.data.genres.slice(0, 20));
      });
  };

  const getMoviesByGenre = (genreId) => {
    axios
      .get(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
      .then((response) => {
        setMoviesByGenre((prevMoviesByGenre) => ({
          ...prevMoviesByGenre,
          [genreId]: response.data.results,
        }));
      });
  };

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    genres.forEach((genre) => {
      getMoviesByGenre(genre.id);
    });
  }, [genres]);

  const handleMovieClick = (movieId) => {
    navigate(`/film/${movieId}`);
  };

  return (
    <div className="list-swiper">
      {genres.map((genre) => (
        <div key={genre.id}>
          <h2
            key={genre.id}
            onClick={() => navigate(`/categorie/${genre.id}`)}
            onKeyDown={() => navigate(`/categorie/${genre.id}`)}
            role="none"
            className="titleMovieBar"
            alt="liens-des-classes"
          >
            {genre.name}
          </h2>
          <Swiper
            navigation
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              1200: { slidesPerView: 8, spaceBetween: 20 },
              770: { slidesPerView: 6, spaceBetween: 20 },
              500: { slidesPerView: 6, spaceBetween: 20 },
              425: { slidesPerView: 4, spaceBetween: 20 },
              320: { slidesPerView: 3, spaceBetween: 20 },
              280: { slidesPerView: 2, spaceBetween: 20 },
            }}
          >
            {moviesByGenre[genre.id] &&
              moviesByGenre[genre.id].map((movie) => (
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
      ))}
    </div>
  );
}

export default Category;
