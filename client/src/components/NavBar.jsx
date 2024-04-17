import { useState } from "react";
import PropTypes from "prop-types";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [openCategorie, setOpenCategorie] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <div className="logo-section">
        <img
          className="logo"
          src="./src/assets/images/logoDesktop.png"
          alt=""
        />
      </div>
      <div className="menu-container">
        <div className="menu-accueil">
          <button
            type="button"
            className="button-navbar"
            onClick={() => navigate("/")}
          >
            Accueil
          </button>
        </div>
        <div className="menu-categorie">
          <button
            type="button"
            className="button-navbar"
            onClick={() => {
              setOpenCategorie(!openCategorie);
            }}
          >
            Catégories
          </button>
          <div
            className={`dropdown-menu-categorie ${openCategorie ? "active" : "inactive"}`}
            style={{ overflowY: "auto", maxHeight: "200px" }}
          >
            <ul>
              <DropdownItems
                text="Action"
                onClick={() => navigate("/categorie")}
              />
              <DropdownItems text="Animation" />
              <DropdownItems text="Aventure" />
              <DropdownItems text="Comédie" />
              <DropdownItems text="Crime" />
              <DropdownItems text="Documentaire" />
              <DropdownItems text="Drame" />
              <DropdownItems text="Familial" />
              <DropdownItems text="Fantastique" />
              <DropdownItems text="Guerre" />
              <DropdownItems text="Historique" />
              <DropdownItems text="Horreur" />
              <DropdownItems text="Musique" />
              <DropdownItems text="Mystère" />
              <DropdownItems text="Romance" />
              <DropdownItems text="Science-Fiction" />
              <DropdownItems text="Thriller" />
              <DropdownItems text="Téléfilm" />
              <DropdownItems text="Western" />
            </ul>
          </div>
        </div>
        <div className="menu-favoris">
          <button
            type="button"
            className="button-navbar"
            onClick={() => navigate("/film")}
          >
            Favoris
          </button>
        </div>
        <div className="menu-forum">
          <button
            type="button"
            className="button-navbar"
            onClick={() => navigate("/forumAccueil")}
          >
            Forum
          </button>
        </div>
      </div>
      <div className="searchbar-logo">
        <input className="search-bar" placeholder="Rechercher .." />
        <img
          className="logo-avatar"
          src="./src/assets/images/user-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

function DropdownItems({ text }) {
  const navigate = useNavigate();
  return (
    <li
      className="link"
      onClick={() => navigate("/categorie")}
      onKeyDown={() => navigate("/categorie")}
      role="presentation"
    >
      {text}
    </li>
  );
}

export default NavBar;

DropdownItems.propTypes = {
  text: PropTypes.string.isRequired,
};
