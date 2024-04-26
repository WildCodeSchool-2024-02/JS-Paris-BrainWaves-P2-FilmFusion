import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBarGenres from "../components/CategorieComponents/SideBarGenres";
import "./Categorie.css";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

function Categorie() {
  const { categoryid } = useParams();
  const [urlCategorie, setUrlCategorie] = useState([]);
  const [firstIdListGenre, setUrlFirstIdListGenre] = useState(categoryid);
  const [genres, setGenres] = useState();
  const [checkData, setCheckData] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const url = `${apiUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${categoryid ? categoryid.toString() : firstIdListGenre}&api_key=${apiKey}`;

  const category = genres?.find(
    (genre) =>
      genre.id.toString() ===
      (categoryid ? categoryid.toString() : firstIdListGenre.toString())
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get(`${apiUrl}/genre/movie/list?api_key=${apiKey}`)
      .then((response) => {
        setUrlFirstIdListGenre(response.data.genres[0].id);
        setCheckData(true);
        setGenres(response.data.genres);
      });
  }, []);

  useEffect(() => {
    if (checkData) {
      axios.get(url).then((response) => {
        setUrlCategorie(response.data.results);
      });
    }
  }, [url, checkData, page]);

  const handleMovieClick = (movieId) => {
    navigate(`/film/${movieId}`);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [categoryid]);

  return (
    <>
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
      <div className="pagination">
        <button
          className="buttonPagi"
          type="submit"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Précédent
        </button>
        <span>Page {page}</span>
        <button className="buttonPagi" type="submit" onClick={handleNextPage}>
          Suivant
        </button>
      </div>
    </>
  );
}

export default Categorie;
