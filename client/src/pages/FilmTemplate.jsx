import { useLoaderData } from "react-router-dom";
import SynopisCard from "../components/SynopisCard";
import ActeurCard from "../components/ActeurCard";

function FilmTemplate() {
  const movie = useLoaderData();
  console.info(movie.data.id);

  return (
    <div>
      <SynopisCard movie={movie} />
      <ActeurCard movie={movie.data.id} />
    </div>
  );
}
export default FilmTemplate;
