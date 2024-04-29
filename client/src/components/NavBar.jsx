import { useState, useEffect } from "react";
import "./NavBar.css";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import ModalSearchBarMobile from "./ModalSearchBarMobile";

function NavBar() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [visibleResponsive, setVisibleResponsive] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 360px) and (max-width: 1150px)"
    ).matches;
    setVisibleResponsive(mediaQuery);
  }, []);

  const handleClick = () => {
    setOpenSearchBar(false);
    setValue("");
  };

  const handleModal = () => {
    setOpenModal(true);
    document.body.classList.add("active");
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
            Home
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
            Categories
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
        {!visibleResponsive && (
          <SearchBar
            openSearchBar={openSearchBar}
            setOpenSearchBar={setOpenSearchBar}
            value={value}
            setValue={setValue}
            visibleResponsive={visibleResponsive}
          />
        )}
        {visibleResponsive && (
          <button
            type="button"
            aria-label="Toggle Search Bar"
            className="open-modal-search-bar"
            onClick={handleModal}
          >
            <IoIosSearch />
          </button>
        )}
        {openModal && <ModalSearchBarMobile closeModal={setOpenModal} />}
      </div>
    </div>
  );
}

export default NavBar;
