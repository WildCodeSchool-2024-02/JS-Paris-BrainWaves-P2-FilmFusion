import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState();
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";

  const getMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
      .then((response) => {
        setMovies(response.data);
        // q
        
      });
  };

  return (
    <div>
      {movies ? <div>{movies.results.title}</div> : null}
      <button type="button" onClick={getMovies}>
        Get Movie
      </button>
    </div>
  );
}

export default App;
