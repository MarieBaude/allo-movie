import React from "react";
import BtnFav from "./BtnFav";

function MovieCard(props) {
  return (
    <div className="mx-6 mb-24 max-w-xs rounded-lg bg-gray-800">
      <a href="#">
        <img className="rounded-t-lg" src={props.poster} alt={props.title} />
      </a>
      <div className="flex justify-between align-center p-5">
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>

        {/* Icon */}
        <div
          className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-300"
          onClick={() => props.handleFavouritesClick(movie)}
        >
          <BtnFav />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
