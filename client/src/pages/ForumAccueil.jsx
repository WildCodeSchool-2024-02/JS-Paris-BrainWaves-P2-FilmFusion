import Forumpost from "../components/Forum/Forumpost";
import ListeFilm from "../components/Forum/listefilm";
import "./ForumAcceuil.css";

function ForumAccueil() {

  
  return (
    <div className="forum">
      <h1 className="titleforum">
        Bienvenues sur le forum <br /> Venez papoter et trouver des conseils
        pour choisir <br /> un film !
      </h1>
      <div className="forumalignement">
        <ListeFilm />
        <Forumpost />
      </div>
    </div>
  );
}

export default ForumAccueil;
