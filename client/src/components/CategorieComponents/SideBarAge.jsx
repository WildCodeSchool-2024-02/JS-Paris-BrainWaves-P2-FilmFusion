import "./SideBarAge.css";

function SideBarAge() {
  return (
    <div>
      <div className="age-container">
        <p>Limites d'âges</p>
        <div className="display-age-bouton">
          <button type="button" className="bouton-age">
            U
          </button>
          <button type="button" className="bouton-age">
            -10
          </button>
          <button type="button" className="bouton-age">
            -12
          </button>
          <button type="button" className="bouton-age">
            -16
          </button>
          <button type="button" className="bouton-age">
            -18
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBarAge;
