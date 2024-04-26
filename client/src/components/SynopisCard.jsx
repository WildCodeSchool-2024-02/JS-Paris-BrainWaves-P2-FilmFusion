import axios from "axios";
import "./SynopisCard.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { MdVideoLibrary } from "react-icons/md";
import ModalTrailer from "./ModalTrailer";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

function SynopisCard({ movie }) {
  const url = `${apiUrl}/movie/${movie.data.id}/credits?api_key=${apiKey}`;

  const [openModalTrailer, setOpenModalTrailer] = useState(false);
  const [urlDirector, setUrlDirector] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setUrlDirector(
        response.data.crew.find((value) => value.job === "Director")
      );
    });
  }, [url]);

  const handleModalTrailer = () => {
    setOpenModalTrailer(true);
    document.body.classList.add("active");
  };

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
          <h1 className="title-movie">{movie.data.title}</h1>
          <div className="details-film">
            <div className="data-film">
              <div className="release-runtime">
                <p>{movie.data.release_date}</p>
                <p>{movie.data.runtime} min</p>
              </div>
              <div className="genres-movie">
                {movie.data.genres.map((genre) => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </div>
            </div>
            <p className="realisateur">{urlDirector.name}</p>
            <button
              type="button"
              className="button-trailer"
              onClick={handleModalTrailer}
            >
              Watch Trailer <MdVideoLibrary />
            </button>
            <div className="modal-trailer">
              {openModalTrailer && (
                <ModalTrailer
                  closeModalTrailer={setOpenModalTrailer}
                  movie={movie.data.id}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="synopis">
        <h2 className="synopsis-title">Synopsis</h2>
        <p className="synopsis-resume">{movie.data.overview}</p>
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
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
