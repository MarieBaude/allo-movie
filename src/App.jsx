import { Routes, Route } from 'react-router-dom';

import Main from "./container/Main"
import Favorites from './container/Favorites';
import MovieDetail from "./container/MovieDetail";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
    </Routes>
  )
}

export default App
