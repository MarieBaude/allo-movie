import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap justify-center mt-5">
        {favorites.map((favorite) => (
          <MovieCard
            key={favorite.id}
            title={favorite.title}
            poster={
              favorite.poster_path
                ? `https://image.tmdb.org/t/p/w500${favorite.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Poster"
            }
          />
        ))}
      </div>
    </Layout>
  );
}

export default Favorites;