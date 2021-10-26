import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  
  return (
    <div className="row m-5">
      {movies.map((movie) => (
        <MovieCard movie={movie}></MovieCard>
      ))}
    </div>
  );
}

export default Movie;
