import PropTypes from "prop-types";
import axios from "axios";
import "./SearchBar.css";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ openSearchBar, setOpenSearchBar, value, setValue }) {
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

  const [urlSearch, setUrlSearch] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const results = response.data.results.filter((data) =>
          data.title.toLowerCase().includes(value.toLowerCase())
        );
        setUrlSearch(results);
      })
      .catch((err) => console.error(err));
  }, [url, value]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setOpenSearchBar(!openSearchBar);
  };

  const handleMovieClick = (movieId) => {
    setOpenSearchBar(false);
    navigate(`/film/${movieId}`);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search ..."
        value={value}
        onChange={handleChange}
      />
      <button
        type="button"
        aria-label="Toggle Search Bar"
        className="bouton-searchbar-mobile-version"
      >
        <IoIosSearch />
      </button>
      <div
        className={`dropdown-search-bar ${openSearchBar ? "active" : "inactive"}`}
      >
        {urlSearch.map((movie) => (
          <p
            key={movie.title}
            className="link"
            role="presentation"
            onClick={() => handleMovieClick(movie.id)}
            onKeyDown={() => handleMovieClick(movie.id)}
          >
            {movie.title}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  openSearchBar: PropTypes.bool.isRequired,
  setOpenSearchBar: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
