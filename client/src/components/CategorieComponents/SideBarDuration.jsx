import "./SideBarDuration.css";

function SideBarDuration() {
  return (
    <div className="duration-container">
      <p>Durée</p>
      <input type="range" className="custom-range" />
    </div>
  );
}

export default SideBarDuration;
