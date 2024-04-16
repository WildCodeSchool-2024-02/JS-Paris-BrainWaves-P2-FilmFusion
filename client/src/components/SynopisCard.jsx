import { useLoaderData } from "react-router-dom";
import "./SynopisCard.css";

function SynopisCard() {
  const movies = useLoaderData();

  return (
    <div>
      <div className="film-presentation">
        <div className="image-container">
          <p className="image-film">image du film</p>
        </div>
        <div className="info-film">
          <h1>{movies.data.title}</h1>
          <div className="data-film">
            <p>Date de sortie</p>
            <p>Durée du film</p>
            <p>Genre</p>
            <p>Réalisateur</p>
          </div>
        </div>
      </div>
      <div className="synopis">
        <h2>Résumé</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          asperiores, recusandae reiciendis, eveniet nam iusto, laborum
          laudantium fugit earum assumenda ad aliquam et. Incidunt, quisquam
          tempore! Expedita voluptatibus reiciendis quis. Dignissimos saepe
          quidem quia rerum odit? Reprehenderit reiciendis, facere dicta beatae
          consequuntur aliquid suscipit temporibus nisi amet culpa, soluta natus
          nam, rem sed cumque! Velit aliquam quam modi repellendus sunt. Ullam
          qui doloremque recusandae nesciunt atque officiis accusantium vitae
          quaerat minus eveniet omnis perspiciatis vel sapiente quae molestias
          tenetur voluptate, officia deserunt voluptates placeat sunt minima
          voluptatibus quibusdam! Expedita, deserunt?
        </p>
      </div>
    </div>
  );
}

export default SynopisCard;
