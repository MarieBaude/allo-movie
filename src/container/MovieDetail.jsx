import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";

import { useParams } from "react-router-dom";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function MovieDetail() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const apiKey = "1dd5917804ffb261770f7039e814ff0d";
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=fr-FR`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));

    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`
    )
      .then((response) => response.json())
      .then((data) => setGenres(data.genres));
  }, [movieId]);

  const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <Layout>
      <div className="relative isolate overflow-hidden bg-gray-600 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                  {movie.title}
                </h1>

                <div className="mt-3">
                  {movie.genres?.map((genre) => {
                    const genreName = genres.find(
                      (g) => g.id === genre.id
                    )?.name;
                    return (
                      genreName && (
                        <div
                          key={genre.id}
                          className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border mr-2"
                        >
                          {genreName}
                        </div>
                      )
                    );
                  })}
                </div>

                <p className="mt-6 text-xl text-justify leading-8 text-gray-300">
                  {movie.overview}
                </p>
              </div>
            </div>
            <div>
              <img src={posterPath} alt={movie.title} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
