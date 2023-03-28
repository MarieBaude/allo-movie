import { Routes, Route } from "react-router-dom";

import Main from "./container/Main";
import Favorites from "./container/Favorites";
import MovieDetail from "./container/MovieDetail";
import SearchResult from './container/SearchResult';

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
      <Route path="/search">
        <SearchResult results={searchResults} />
      </Route>
      <Route path="/search-results">
        <Search onSearch={handleSearchResults} />
      </Route>
    </Routes>
  );
}

export default App;
