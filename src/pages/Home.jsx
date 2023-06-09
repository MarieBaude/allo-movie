import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import Layout from "../components/layout/layout";

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

  const addToFavorites = (movie) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!storedFavorites.some(favorite => favorite.id === movie.id)) {
      storedFavorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    }
  };

  return (
    <Layout>
      <main className="bg-gray-600 flex flex-col align-center">
        <Header />

        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard
                key={movie.id}
                title={movie.title}
                poster={`https://image.tmdb.org/t/p/w500${
                  movie.poster_path ? movie.poster_path : ""
                }`}
                onAddToFavorites={() => addToFavorites(movie)}
              />
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Main;
