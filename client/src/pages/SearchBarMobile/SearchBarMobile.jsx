import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBarMobile.css";

function SearchBarMobile() {
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

  const [urlSearch, setUrlSearch] = useState([]);
  const [value, setValue] = useState("");

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

  const handleMovieClick = (movieId) => {
    navigate(`/film/${movieId}`);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="input-mobile-box">
        <input
          type="text"
          name="search-mobile"
          id="search-mobile"
          className="input-mobile"
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="box-search-section">
      <div className="search-section">
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
    </div>
  );
}

export default SearchBarMobile;
