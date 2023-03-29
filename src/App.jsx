import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./container/Main";
import Favorites from "./container/Favorites";
import MovieDetail from "./container/MovieDetail";
import SearchResult from "./container/SearchResult";
import SearchInput from "./components/SearchInput";

export const SearchContext = createContext();

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const toto = (maRecherche) => {
    console.log('toto:', maRecherche)
    setSearchResults(maRecherche)
  }

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{searchResults, toto}}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
        <Route
          path="/search"
          element={<SearchResult />}
        />
        <Route
          path="/search-results"
          element={<SearchInput onSearch={handleSearchResults} />}
        />
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;
