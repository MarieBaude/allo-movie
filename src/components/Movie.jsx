import React from "react";

function Movie() {
  return (
    <div class="mx-6 mb-24 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          class="rounded-t-lg"
          src="https://source.unsplash.com/1600x900/?nature,photography,technology"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Title
          </h5>
        </a>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default Movie;
