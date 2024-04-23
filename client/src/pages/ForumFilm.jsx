import axios from "axios";
import { useState, useEffect } from "react";
import "./ForumFilm.css";
import { useNavigate } from "react-router-dom";

function ForumFilm() {
  const [Detail, setDetail] = useState(null);
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";
  const navigate = useNavigate();
  const handleMovieClick = () => {
    navigate(`/film/124905`);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/124905?Language=en-US&api_key=${apiKey}`
      )
      .then((response) => {
        setDetail(response.data);
      });
  }, []);

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
          onClick={() => handleMovieClick()}
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
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur deserunt officiis eum facilis voluptatum praesentium
            corrupti quo fuga quae? Odio eveniet voluptas impedit dolor
            architecto fuga illo facere libero dolores! Dicta id laboriosam vero
            voluptatum, repudiandae numquam reprehenderit, nisi error doloribus,
            quibusdam exercitationem unde ratione odio ab eveniet consequuntur
            voluptatem atque enim adipisci distinctio fugit aut? A inventore,
            culpa maiores vel ab, eligendi pariatur qui earum magni sint
            consequatur asperiores repudiandae beatae, amet autem? Fugit vel
            labore earum architecto corporis blanditiis quisquam cupiditate
            eligendi deserunt, nisi minus esse quidem distinctio veniam neque
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
