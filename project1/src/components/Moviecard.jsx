import React from 'react';
import { Link } from 'react-router-dom';

function Moviecard({ movie }) {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="w-60 p-4 border rounded shadow bg-white">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-auto mb-2" />
        <h1 className="text-lg font-semibold">{movie.Title}</h1>
        <Link
          to={`/movies/${movie.imdbID}`} // ✅ Use correct prop
          className="inline-block mt-2 px-4 py-1 text-sm bg-blue-500 text-white rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Moviecard;
