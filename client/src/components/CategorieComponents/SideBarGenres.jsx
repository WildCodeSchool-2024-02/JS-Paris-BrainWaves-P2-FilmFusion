import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./SideBarGenres.css";

function SideBarGenres({ categories }) {
  const navigate = useNavigate();

  return (
    <div className="genres-container">
      <p className="p-genre">Genres</p>
      <div className="display-bouton-genre">
        {categories.map((categorie) => (
          <button
            key={categorie.id}
            type="button"
            className="bouton-genre"
            value={categorie.id}
            onClick={() => navigate(`/categorie/${categorie.id}`)}
          >
            {categorie.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideBarGenres;

SideBarGenres.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
