import { useState } from "react";
import "./App.css";
import axios from 'axios';
import NavBar from "./components/NavBar";

function App() {

  const [movies, setMovies] = useState (null);

  const apiKey = 'd18d8616efca4b1c0cfc2fbae4c67c7c';

  const getMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/11?api_key=${apiKey}`)
    .then((response) => {
      setMovies(response.data);
    });

  };

  return (
    <div>
    <NavBar/>
      {movies ? <h1>{movies.title}</h1> : null}
    <button type="button" onClick={getMovies}>Get movies</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui, necessitatibus, enim blanditiis eligendi non vitae exercitationem accusamus molestias quasi est illo voluptatem dolore quisquam tempora, aspernatur voluptates reprehenderit quia!
    Voluptatem obcaecati animi sunt praesentium neque illo molestias atque unde. Dolore, repudiandae ratione animi, sed culpa nostrum laudantium, maxime quibusdam provident alias numquam ipsum tenetur accusamus temporibus facilis nemo minima.
    Ullam vitae tenetur nam at? Sapiente architecto eius in voluptas itaque repudiandae commodi delectus voluptate soluta, nisi suscipit recusandae dolore officiis voluptatem quae velit, vel adipisci rerum odit fugit dolores!
    Voluptas voluptatibus aliquid magni, odio totam a, voluptatum iste consequuntur corrupti cumque labore nam! Dicta veniam quas, cumque minus harum impedit pariatur rerum eius totam dolores sint officia odio quod.
    Inventore cupiditate fuga voluptatem, doloribus consequatur nisi sunt voluptates temporibus nostrum architecto ducimus saepe rerum rem, impedit eum! Ullam velit voluptatem harum quam pariatur consectetur, perspiciatis voluptate enim consequatur maxime.
    Itaque fugit in aperiam veritatis quidem atque, voluptate, odio dolor ad facere assumenda! Nisi, ullam deleniti magni error maiores quibusdam aperiam nobis sit aspernatur recusandae adipisci quas dicta minus illo!
    Eum odio quisquam eius atque. Quasi quisquam error libero. Autem, earum harum quaerat doloribus voluptate excepturi repellendus ex, deserunt culpa reprehenderit ad! Sit eligendi ex accusantium accusamus enim optio cupiditate!
    Corrupti accusamus reiciendis voluptates molestiae quas nemo tenetur aliquam quia. Laborum, quasi. Et, consectetur voluptate autem officia facere quos? Voluptatum, incidunt. A perferendis ipsa sequi natus vero, porro laborum dolorum.
    Nam eos repellat nobis nisi dolorem dolorum perferendis id laudantium aperiam quae tenetur praesentium, dolore, error eveniet atque inventore voluptas facere vel repudiandae deserunt mollitia fugit nemo. Earum, architecto quod?
    Vel fugiat, minus corporis consectetur quidem quibusdam quia beatae excepturi esse obcaecati doloremque exercitationem iure a perspiciatis pariatur nam mollitia libero, asperiores explicabo quis. Repellendus error nam fuga rem ex.
    Soluta sed consectetur placeat sequi? Numquam velit saepe consequuntur alias modi, distinctio veniam iusto consequatur vitae commodi accusantium quibusdam suscipit, sint sapiente quisquam impedit facilis soluta expedita ullam voluptatibus dicta.
    Repellat vitae similique quam molestiae doloremque, perspiciatis, inventore eum dicta debitis numquam libero rerum beatae reiciendis qui ex nisi, earum harum amet fugit doloribus minus! Possimus ipsam nisi similique expedita.
    Dicta laudantium commodi nulla aperiam alias odio, ea impedit repellat, itaque quidem, recusandae voluptates repellendus libero molestias qui quam quia quis? Officiis sequi explicabo, dignissimos cupiditate quos corporis sint maxime?
    Nam alias quisquam id ex, atque vitae placeat. Non ratione, iste ad a beatae maxime delectus tenetur, reprehenderit expedita iusto atque ea, totam autem esse quos porro dolorem dolores animi!
    Iste, inventore? Ipsa accusamus tempore optio tempora quo, placeat debitis tenetur nisi recusandae libero fuga consectetur iste praesentium odio hic ullam adipisci incidunt error beatae vero. Exercitationem quo recusandae magni.
    Porro non magnam libero voluptate facilis ratione dignissimos culpa? Accusantium ipsa nobis quo cumque natus saepe officiis, neque veritatis perspiciatis inventore aut, autem, totam dolore tempore iusto corrupti repudiandae iure?
    Excepturi, iure saepe reprehenderit non ab soluta ea rerum aliquam dicta placeat tenetur ipsam mollitia a voluptatum? Architecto, labore quia! Aspernatur eligendi eveniet tenetur quas ut ducimus necessitatibus dicta beatae?
    Provident eos animi quos quod, officia eum placeat incidunt, fugiat autem earum dicta saepe, dolorum necessitatibus et obcaecati inventore. Sunt illum fuga iste sed voluptas culpa debitis laudantium tempore voluptatem.
    Illo illum sapiente praesentium eveniet, nemo ab maxime labore voluptates hic consectetur officiis laborum at delectus in odio suscipit dolore, quae dolorem sit magni dignissimos atque ea. Illum, saepe a?
    Maiores, voluptates voluptas iusto, nisi molestias ad sapiente, molestiae facilis sint quas mollitia modi possimus doloremque adipisci illo tempore fuga praesentium ab. Molestiae impedit porro vel minus cupiditate doloribus dolor.</p>
    </div>
  );
}

export default App;
