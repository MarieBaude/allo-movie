import { Routes, Route } from 'react-router-dom';

import Main from "./container/Main"
import Favorites from './container/Favorites';
// import MovieDetail from "./MovieDetail";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites/>} />
        {/* <Route exact path="/movies/:movieId" component={MovieDetail} /> */}
    </Routes>
  )
}

export default App
