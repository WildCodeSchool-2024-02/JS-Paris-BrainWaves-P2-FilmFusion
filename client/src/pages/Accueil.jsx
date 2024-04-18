import Top20Film from "../components/MovieBar/Top20Film";
import TopRated from "../components/MovieBar/TopRated";
import Carousel  from "../components/Carousel";
import "./Acceuil.css"  

function Accueil() {
  return (
    <div>
      <div className="Carousel"><Carousel/></div>
      <Top20Film />
      <TopRated />
    </div>
  );
}

export default Accueil;
