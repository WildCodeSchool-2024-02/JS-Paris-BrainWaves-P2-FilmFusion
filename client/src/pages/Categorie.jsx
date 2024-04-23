/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import SideBarGenres from "../components/CategorieComponents/SideBarGenres";
import SideBarAge from "../components/CategorieComponents/SideBarAge";
import SideBarDuration from "../components/CategorieComponents/SideBarDuration";
import "./Categorie.css";

function Categorie() {
  const { id } = useParams();
  const [urlCategorie, setUrlCategorie] = useState([]);
  const [genres, setGenres] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${id}&api_key=${apiKey}`
      );
      setUrlCategorie(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [id, currentPage]);

  const handleMovieClick = (movieId) => {
    navigate(`/film/${movieId}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const category = genres?.find((genre) => genre.id.toString() === id);

  return (
    <div>
      <div className="en-tete">
        <h1 className="titre-container">{category?.name}</h1>
      </div>
      <div className="display-page">
        <div className="display-movies">
          {urlCategorie?.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleMovieClick(movie.id)}
              onKeyDown={() => handleMovieClick(movie.id)}
              role="presentation"
              className="image-movie"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt="img-film"
            />
          ))}
        </div>
        <div className="side-bar">
          <SideBarGenres />
          <SideBarAge />
          <SideBarDuration />
        </div>
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button
            type="submit"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            type="submit"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Categorie;
