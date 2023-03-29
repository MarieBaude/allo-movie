import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/layout";

function SearchResult({ results }) {
  const navigate = useNavigate();

  return (
    <Layout>
      {results.length === 0 ? (
        <p>Aucun résultat trouvé.</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
}

export default SearchResult;
