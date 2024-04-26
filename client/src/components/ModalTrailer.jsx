import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./ModalTrailer.css";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

function ModalTrailer({ closeModalTrailer, movie }) {
  const url = `${apiUrl}/movie/${movie}/videos?api_key=${apiKey}`;

  const [urlTrailer, setUrlTrailer] = useState([]);

  const handleModalTrailer = () => {
    closeModalTrailer(false);
    document.body.classList.remove("active");
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setUrlTrailer(response.data.results);
    });
  }, [url]);

  const trailerFilter = urlTrailer.filter((value) => value.type === "Trailer");

  return (
    <div>
      <div className="modal-trailer-container">
        <button
          className="button-close-trailer"
          type="button"
          onClick={handleModalTrailer}
        >
          X
        </button>
        <div className="trailer-container">
          {trailerFilter[0] && (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailerFilter[0]?.key}`}
              controls
              playing
              width="100%"
              height="100%"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalTrailer;

ModalTrailer.propTypes = {
  closeModalTrailer: PropTypes.bool.isRequired,
  movie: PropTypes.bool.isRequired,
};
