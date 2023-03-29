import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/layout";
import { SearchContext } from '../App';
import { Link } from "react-router-dom";
import MovieCard from '../components/MovieCard';

function SearchResult() {
  const navigate = useNavigate();
  const searchContext = useContext(SearchContext);

  return (
    <Layout>
      {searchContext.searchResults.length === 0 ? (
        <p>Aucun résultat trouvé.</p>
      ) : (
        <section className="flex flex-wrap justify-center mt-5">
          {searchContext.searchResults.map((result) => (
            <Link to={`/movies/${result.id}`} key={result.id}>
              <MovieCard
                key={result.id}
                title={result.title}
                poster={result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : 'https://images.assetsdelivery.com/compings_v2/pavelstasevich/pavelstasevich1811/pavelstasevich181101027.jpg'}
              />
            </Link>
          ))}
        </section>
      )}
    </Layout>
  );
}

export default SearchResult;

