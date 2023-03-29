import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from '../App';

function SearchInput({ onSearch }) {
  const searchResult = useContext(SearchContext);

  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setResults] = useState([]);

  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    const apiKey = "1dd5917804ffb261770f7039e814ff0d";
    event.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => {
        searchResult.toto(data.results);
        // onSearch(data.results);
        navigate("/search");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Recherche
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Recherche"
          value={searchTerm}
          onChange={handleSearchInputChange}
          required
        />
      </div>
    </form>
  );
}

export default SearchInput;
