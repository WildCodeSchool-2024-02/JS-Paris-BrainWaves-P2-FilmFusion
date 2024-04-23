import Forumpost from "../components/Forum/Forumpost";
import ListeFilm from "../components/Forum/listefilm";
import "./ForumAcceuil.css";

function ForumAccueil() {
  return (
    <div className="fofo">
      <h1 className="titlleforum">
        Bienvenues sur le forum <br /> Venez papoter et trouver des conseils
        pour choisir <br /> un film !
      </h1>
      <div className="ok">
        <ListeFilm />
        <Forumpost />
      </div>
    </div>
  );
}

export default ForumAccueil;
