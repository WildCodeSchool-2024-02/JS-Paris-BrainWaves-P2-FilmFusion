import "./SynopisCard.css";
import PropTypes from "prop-types";

function SynopisCard({ movie }) {
  return (
    <div>
      <div className="film-presentation">
        <div className="image-container">
          <img
            className="image-film"
            src={`https://image.tmdb.org/t/p/w500${movie.data.poster_path}`}
            alt="Affiche du film"
          />
        </div>
        <div className="info-film">
          <h1>{movie.data.title}</h1>
          <div className="data-film">
            <p>{movie.data.release_date}</p>
            <p>{movie.data.runtime} min</p>
            <ul className="genres-movie">
              {movie.data.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <p>Réalisateur</p>
        </div>
      </div>
      <div className="synopis">
        <h2>Synopsis</h2>
        <p>{movie.data.overview}</p>
      </div>
    </div>
  );
}

export default SynopisCard;

SynopisCard.propTypes = {
  movie: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      runtime: PropTypes.number.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
