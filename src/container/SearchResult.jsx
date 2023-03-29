import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/layout";
import { SearchContext } from '../App';

function SearchResult() {
  const navigate = useNavigate();
  const searchContext = useContext(SearchContext);

  return (
    <Layout>
      {searchContext.searchResults.length === 0 ? (
        <p>Aucun résultat trouvé.</p>
      ) : (
        <ul>
          {searchContext.searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
}

export default SearchResult;
