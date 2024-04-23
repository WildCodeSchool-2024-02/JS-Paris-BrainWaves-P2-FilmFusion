import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBarGenres from "../components/CategorieComponents/SideBarGenres";
import "./Categorie.css";

function Categorie() {
  const { categoryid } = useParams();
  const [urlCategorie, setUrlCategorie] = useState([]);
  const [firstIdListGenre, setUrlFirstIdListGenre] = useState(categoryid);
  const [genres, setGenres] = useState();
  const [checkData, setCheckData] = useState(false);
  const navigate = useNavigate();

  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";

  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${categoryid.toString() ? categoryid : firstIdListGenre}&api_key=${apiKey}`;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then((response) => {
        setUrlFirstIdListGenre(response.data.genres[0].id);
        setCheckData(true);
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (checkData) {
      axios
        .get(url)
        .then((response) => {
          setUrlCategorie(response.data.results);
        })
        .catch((err) => console.error(err));
    }
  }, [url, checkData]);

  const handleMovieClick = (movieId) => {
    navigate(`/film/${movieId}`);
  };

  const category = genres?.find((genre) => genre.id.toString() === categoryid);

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
          {genres && <SideBarGenres categories={genres} />}
        </div>
      </div>
    </div>
  );
}

export default Categorie;
