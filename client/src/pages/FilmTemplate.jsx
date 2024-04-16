import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import SynopisCard from "../components/SynopisCard";

function FilmTemplate() {
  const movie = useLoaderData();
  console.info(movie);

  const [cast, setCast] = useState();
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";

  axios
    .get(`https://api.themoviedb.org/3/movie/550/credits?api_key=${apiKey}`)
    .then((response) => {
      setCast(response.data);
      // console.log(response.data);
    });

  return (
    <div>
      <SynopisCard />
      <div>
        <p>Actors</p>
        <section>{cast?.cast.name}</section>
      </div>
    </div>
  );
}

export default FilmTemplate;
