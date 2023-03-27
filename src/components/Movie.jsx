import React from "react";

function Movie() {
  return (
    <div class="mx-6 mb-24 max-w-xs rounded-lg bg-gray-800">
      <a href="#">
        <img
          class="rounded-t-lg"
          src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg"
          alt=""
        />
      </a>
      <div class="flex justify-between align-center p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Title
          </h5>
        </a>

        {/* Icon */}
        <div class="flex items-center justify-center h-12 w-12 rounded-full bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            class="w-6 h-6 heart-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>       
        </div>
        
      </div>
    </div>
  );
}

export default Movie;
