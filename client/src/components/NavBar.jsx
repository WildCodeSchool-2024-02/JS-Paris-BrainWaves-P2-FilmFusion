import "./NavBar.css";

function NavBar() {

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
          >
            Accueil
          </button>
        </div>
        <div
          className="menu-categorie"
        >
          <button
            type="button"
            className="button-navbar"
          >
            Catégories
          </button>
        </div>
        <div className="menu-favoris">
          <button
            type="button"
            className="button-navbar"
          >
            Favoris
          </button>
        </div>
        <div className="menu-forum">
          <button
            type="button"
            className="button-navbar"
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