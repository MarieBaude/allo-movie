import React from "react";
import Header from "../components/Header";
import Movie from '../components/Movie';

function Main() {
  return (
    <main className="bg-gray-600 min-h-screen">
      <Header />

    <div className="flex justify-center">
        <Movie />
        <Movie />
        <Movie />
    </div>

    </main>
  );
}

export default Main;
