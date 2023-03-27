import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Movie from "../components/Movie";
import Pagination from '../components/Pagination';

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = "1dd5917804ffb261770f7039e814ff0d";
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <main className="bg-gray-600 flex flex-col align-center">
      <Header />

      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>

      <Pagination />

    </main>
  );
}

export default Main;
