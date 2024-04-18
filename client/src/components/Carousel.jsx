
import axios from "axios"; 
import { useState, useEffect } from "react";
import "./Carousel.css";

function Carousel() {
  const [slide, setSlide] = useState(0);
  const [upcoming, setUpcoming] = useState();
  const apiKey = "d18d8616efca4b1c0cfc2fbae4c67c7c";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`) 
      .then((response) => {
        setUpcoming(response.data.results.slice(0, 8));
      });
  }, [apiKey]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % (upcoming ? upcoming.length : 1));
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
};

export default Carousel;