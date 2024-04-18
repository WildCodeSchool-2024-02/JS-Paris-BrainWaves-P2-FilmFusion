import axios from "axios";
import { useState, useEffect } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [openCategorie, setOpenCategorie] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpenCategorie(false);
  };

  const [categories, setCategories] = useState();
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

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
            onClick={() => {
              navigate("/");
              handleClick();
            }}
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
              {categories?.genres.map((categorie) => (
                <li
                  key={categorie.id}
                  type="button"
                  className="link"
                  value={categorie.id}
                  onClick={() => {
                    navigate(`/categorie/${categorie.id}`);
                    handleClick();
                  }}
                  onKeyDown={() => navigate(`/categorie/${categorie.id}`)}
                  role="presentation"
                >
                  {categorie.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="menu-favoris">
          <button
            type="button"
            className="button-navbar"
            onClick={() => navigate("")}
          >
            Favoris
          </button>
        </div>
        <div className="menu-forum">
          <button
            type="button"
            className="button-navbar"
            onClick={() => {
              navigate("/forumAccueil");
              handleClick();
            }}
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

export default NavBar;
