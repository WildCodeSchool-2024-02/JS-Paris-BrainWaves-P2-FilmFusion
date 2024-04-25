import { useLoaderData } from "react-router-dom";
import SynopisCard from "../components/SynopisCard";
import ActeurCard from "../components/ActeurCard";
import Recommendations from "../components/MovieBar/Recommendations";

function FilmTemplate() {
  const movie = useLoaderData();
  console.info("id du film : ", movie.data.id);

  return (
    <div>
      <SynopisCard movie={movie} />
      <ActeurCard movie={movie.data.id} />
      <Recommendations movie={movie} />
    </div>
  );
}
export default FilmTemplate;
