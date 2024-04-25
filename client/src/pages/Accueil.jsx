import Top20Film from "../components/MovieBar/Top20Film";
import TopRated from "../components/MovieBar/TopRated";
import Carousel from "../components/Carousel";
import Category from "../components/MovieBar/Category";
import "./Acceuil.css";

function Accueil() {
  return (
    <>
      <div className="Carousel">
        <Carousel />
      </div>
      <Top20Film />
      <TopRated />
      <Category />
    </>
  );
}

export default Accueil;
