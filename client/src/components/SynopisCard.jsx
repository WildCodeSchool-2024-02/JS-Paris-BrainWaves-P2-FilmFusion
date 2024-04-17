import { useLoaderData } from "react-router-dom";
import "./SynopisCard.css";

function SynopisCard() {
  const movies = useLoaderData();

  return (
    <div>
      <div className="film-presentation">
        <div className="image-container">
          <img
            className="image-film"
            src={movies.data.poster_path}
            alt="Affiche du film"
          />
        </div>
        <div className="info-film">
          <h1>{movies.data.title}</h1>
          <div className="data-film">
            <p>{movies.data.release_date}</p>
            <p>{movies.data.runtime} min</p>
            <p>{movies.data.genres.name}</p>
            <p>Réalisateur</p>
          </div>
        </div>
      </div>
      <div className="synopis">
        film-template
        <h2>Synopis</h2>
        <p>{movies.data.overview}</p>

        <h2>Résumé</h2>
      </div>
    </div>
  );
}

export default SynopisCard;
