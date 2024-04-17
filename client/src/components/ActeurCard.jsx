import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ActeurCard.css";

function ActeurCard({ movie }) {
  const [cast, setCast] = useState();
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${apiKey}`
      )
      .then((response) => {
        setCast(response.data);
      });
  }, []);

  console.info(cast);

  return (
    <div>
      <div className="actor-section">
        <h2>Actors</h2>
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
