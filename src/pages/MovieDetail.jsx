import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";

import { useParams } from "react-router-dom";
import BtnFav from '../components/BtnFav';

export default function MovieDetail() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);

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
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=fr-FR`
    )
      .then((response) => response.json())
      .then((data) => setCast(data.cast));
  }, [movieId]);

  const posterPath = `https://image.tmdb.org/t/p/w500/${movie? movie.poster_path : ''}`;

  return (
    <Layout>
      <div className="relative isolate overflow-hidden bg-gray-600 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <section className="lg:pr-4">
              <div className="lg:max-w-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="mt-2 text-3xl max-w-[20ch] font-bold tracking-tight text-gray-100 sm:text-4xl">
                      {movie.title}
                    </h1>

                    <div className="my-3">
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
                  </div>

                  {/* Icon */}
                  <div
                    className="flex items-center mx-1 justify-center h-12 w-12 rounded-full bg-gray-300"
                  >
                   <BtnFav />
                  </div>
                </div>

                <p className="text-gray-300">Sortie : {movie.release_date}</p>
                <p className="text-gray-300">Note : {movie.vote_average}</p>

                <p className="mt-6 text-xl text-justify leading-8 text-gray-400">
                  {movie.overview}
                </p>

                <div className="mt-5">
                  <h3 className="text-2xl text-gray-100">Tête d'affiche</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6">
                    {cast.map((actor) => (
                      <div
                        key={actor.id}
                        className="flex flex-col items-center"
                      >
                        {actor.profile_path ? (
                          <img
                            className="mt-2 w-20 h-20 rounded object-cover"
                            src={`https://image.tmdb.org/t/p/w500/${actor ? actor.profile_path : ''}`}
                            alt={actor.name}
                          />
                        ) : (
                          <img
                            className="mt-2 w-20 h-20 rounded object-cover"
                            src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
                            alt="default actor image"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <img src={posterPath} alt={movie.title} />
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
