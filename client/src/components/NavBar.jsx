// import axios from "axios";
import { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setOpenSearchBar(false);
    setValue("");
  };

  return (
    <div className="nav-bar">
      <div className="logo-section" />
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
              navigate(`/categorie`);
              handleClick();
            }}
          >
            Catégories
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
      <div className="searchbar">
        <SearchBar
          openSearchBar={openSearchBar}
          setOpenSearchBar={setOpenSearchBar}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
}

export default NavBar;
