import { useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {

  const [movies, setMovies] = useState (null);

  const apiKey = 'd18d8616efca4b1c0cfc2fbae4c67c7c';

  const getMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/11?api_key=${apiKey}`)
    .then((response) => {
      setMovies(response.data);
    });

  };

  return (
    <div>
      {movies ? <h1>{movies.title}</h1> : null}
    <button type="button" onClick={getMovies}>Get movies</button>
    </div>
  );
}

export default App;
