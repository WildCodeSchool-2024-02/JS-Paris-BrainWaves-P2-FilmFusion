// import { useLoaderData } from "react-router-dom";
import SideBarGenres from "../components/CategorieComponents/SideBarGenres";
import SideBarAge from "../components/CategorieComponents/SideBarAge";
import SideBarDuration from "../components/CategorieComponents/SideBarDuration";
import "./Categorie.css";

function Categorie() {
  // const categorie = useLoaderData();

  return (
    <div>
      <div className="box-h1">
        <h1 className="titre-container">Titre de la categorie</h1>
      </div>
      <SideBarGenres />
      <SideBarAge />
      <SideBarDuration />
    </div>
  );
}

export default Categorie;
