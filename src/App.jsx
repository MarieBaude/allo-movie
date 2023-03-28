import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./container/Main";
import Favorites from "./container/Favorites";
import MovieDetail from "./container/MovieDetail";
import SearchResult from './container/SearchResult';
import SearchInput from "./components/SearchInput";


function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/movies/:movieId" element={<MovieDetail />} />
      <Route path="/search" element={<SearchResult results={searchResults} />} />
      <Route path="/search-results" element={<SearchInput onSearch={handleSearchResults} />} />
    </Routes>
  );
}

export default App;
