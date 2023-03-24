import React from "react";
import Header from "../components/Header";
import Movie from '../components/Movie';

function Main() {
  return (
    <main className="bg-gray-600">
      <Header />

    <container className="flex justify-center">
        <Movie />
        <Movie />
        <Movie />
    </container>

    </main>
  );
}

export default Main;
