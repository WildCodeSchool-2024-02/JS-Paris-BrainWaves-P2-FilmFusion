import axios from "axios";
import { useEffect, useState } from "react";
import "./SideBarGenres.css";

function SideBarGenres() {
  const [categories, setCategorie] = useState();
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then((response) => {
        setCategorie(response.data);
      });
  }, []);

  return (
    <div className="genres-container">
      <p>Genres</p>
      <div className="display-bouton-genre">
        {categories?.genres.map((categorie) => (
          <button key={categorie.id} type="button" className="bouton-genre">
            {categorie.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideBarGenres;
