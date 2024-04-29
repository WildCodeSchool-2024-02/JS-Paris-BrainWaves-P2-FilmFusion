import Forumpost from "../components/Forum/Forumpost";
import ListeFilm from "../components/Forum/listefilm";
import "./ForumAcceuil.css";

function ForumAccueil() {
  return (
    <div className="forum">
      <h1 className="titleforum">
        Welcome to the forum !<br /> Come chat and find advice <br /> to choose
        a film!
      </h1>
      <div className="forumalignement">
        <ListeFilm className="list-movie" />
        <Forumpost />
      </div>
    </div>
  );
}

export default ForumAccueil;
