import React from "react";
import BtnFav from './BtnFav';

function MovieCard(props) {
  return (
    <div class="mx-6 mb-24 max-w-xs rounded-lg bg-gray-800">
      <a href="#">
        <img class="rounded-t-lg" src={props.poster} alt={props.title} />
      </a>
      <div class="flex justify-between align-center p-5">
        <a href="#">
          <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>

        {/* Icon */}
        <div
          class="flex items-center justify-center h-12 w-12 rounded-full bg-gray-300"
          onClick={() => props.handleFavouritesClick(movie)}
        >
          <BtnFav />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
