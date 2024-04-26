import axios from "axios";
import { useState, useEffect } from "react";
import "./ForumFilm.css";
import { useNavigate, useLocation } from "react-router-dom";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

function ForumFilm() {
  const location = useLocation();
  const movieId = location.state.mId;
  const [Detail, setDetail] = useState(null);

  const navigate = useNavigate();
  const handleMovieClick = () => {
    navigate(`/film/${movieId}`);
  };

  

  useEffect(() => {
    axios

      .get(`${apiUrl}/movie/124905?Language=en-US&api_key=${apiKey}`)

      .then((response) => {
        setDetail(response.data);
      });
  });

  if (!Detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Header">
      <div className="titleFilm">
        <h1 className="title">{Detail.title}</h1>
      </div>

      <div className="banner">
        <img
          className="bannerMovieForum"
          src={`https://image.tmdb.org/t/p/original${Detail.backdrop_path}`}
          alt={Detail.title}
        />
      </div>

      <div className="info">
        <h2
          onClick={() => handleMovieClick(movieId)}
          onKeyDown={handleMovieClick}
          role="presentation"
          className="infoFilm"
        >
          Information du film
        </h2>
      </div>

      <div className="comment">
        <div className="profil">
          <img
            className="profilPic"
            src="https://www.carnivalstore.de/wp-content/uploads/2021/09/1_f21db071-78e0-4143-ab8f-b0adfcebba8f.jpg"
            alt="img"
          />
        </div>

        <div className="content">
          <div className="name">Profil Name</div>

          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur deserunt officiis eum facilis voluptatum praesenti
            architecto fuga illo facere libero dolores! Dicta id laboriosam vero
            voluptatum, repudiandae numquam reprehenderit, nisi error doloribus,
            quibusdam exercitationem unde ratione odio ab eveniet consequuntur
            voluptatem atque enim adipisci distinctio fugit aut? A inventore,
            culpa maiores vel ab, eligendi pariatur qui earum magni sint
            consequatur asperiores repudiandae beatae, amet autem? Fugit vel
            labore earum architecto corporis blanditiis quisquam cupiditate
            possimus mollitia laboriosam sint a atque voluptatem rem.
          </div>

          <div className="dateReponse">
            <p className="date">Posté le 10/10/2024</p>
            <p className="reponse">Répondre</p>
          </div>
        </div>
      </div>

      <div className="addComment">
        <div className="content">
          <div className="papoter">Papoter ici...</div>
        </div>

        <div className="buttonDiv">
          <div className="buttonComment">Commenter</div>
        </div>
      </div>
    </div>
  );
}

export default ForumFilm;
