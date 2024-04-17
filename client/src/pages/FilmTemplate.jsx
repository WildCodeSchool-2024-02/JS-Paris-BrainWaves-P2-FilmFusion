import { useLoaderData } from "react-router-dom";
import SynopisCard from "../components/SynopisCard";

function FilmTemplate() {
  const movie = useLoaderData();
  console.info(movie);

  return (
    <div>
      <SynopisCard />
      <div>Film Template</div>
    </div>
  );
}

export default FilmTemplate;
