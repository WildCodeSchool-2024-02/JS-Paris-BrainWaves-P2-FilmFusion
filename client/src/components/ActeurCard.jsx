import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ActeurCard.css";

function ActeurCard({ movie }) {
  const [cast, setCast] = useState();

  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/movie/${movie}/credits?api_key=${apiKey}`)
      .then((response) => {
        setCast(response.data);
      });
  }, [apiKey, apiUrl, movie]);

  return (
    <div>
      <div className="actor-section">
        <h2 className="actor-title">Actors</h2>
        <div className="galerie-image">
          <div className="slider">
            {cast?.cast.map(
              (actor) =>
                actor.profile_path && (
                  <img
                    key={actor.id}
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    className="image-actor"
                    alt="profile acteurs"
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActeurCard;

ActeurCard.propTypes = {
  movie: PropTypes.number.isRequired,
};
