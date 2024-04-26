import axios from "axios";
import { useState, useEffect } from "react";
import "./Carousel.css";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

function Carousel() {
  const [slide, setSlide] = useState(0);
  const [upcoming, setUpcoming] = useState();

  useEffect(() => {
    axios
      .get(`${apiUrl}/movie/now_playing?api_key=${apiKey}`)
      .then((response) => {
        setUpcoming(response.data.results.slice(0, 10));
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(
        (prevSlide) => (prevSlide + 1) % (upcoming ? upcoming.length : 1)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [upcoming]);

  if (!upcoming) {
    return <div>Loading...</div>;
  }

  return (
    <div className="carousel">
      {upcoming.map((movie, idx) => (
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          key={movie.id}
          className={slide === idx ? "slide active" : "slide"}
        />
      ))}
    </div>
  );
}

export default Carousel;
