import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Movie from "../components/Movie";

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = process.env.API;
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <main className="bg-gray-600">
      <Header />

      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (
          <Movie />
        ))}
      </div>
    </main>
  );
}

export default Main;
