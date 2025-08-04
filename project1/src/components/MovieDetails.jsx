import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  ArrowLeft,
  Star,
  Clock,
  Calendar,
  Users,
  Award,
  Globe,
  Play,
  Heart,
  Share2,
  Download,
  Loader2,
  ExternalLink,
} from "lucide-react";

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${movieId}&apikey=8a2cbff9`)
      .then((data) => {
        console.log(data);
        setMovieDetails(data.data);
      });
  }, [movieId]);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{movieDetails.Title}</h1>
      <img
        src={movieDetails.Poster}
        alt={movieDetails.Title}
        className="w-64 mb-4"
      />
      <div className="flex items-center gap-4 mb-4 text-gray-700">
        <span className="flex items-center gap-1">
          <Calendar size={18} /> {movieDetails.Year}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={18} /> {movieDetails.Runtime}
        </span>
        <span className="flex items-center gap-1">
          <Globe size={18} /> {movieDetails.Country}
        </span>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {movieDetails.Genre?.split(",").map((genre, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-blue-100/70 text-blue-800 rounded-full text-sm"
          >
            {genre.trim()}
          </span>
        ))}
      </div>

      <p>
        <strong>Director:</strong> {movieDetails.Director}
      </p>
      <p>
        <strong>Actors:</strong> {movieDetails.Actors}
      </p>
      <p>
        <strong>Released:</strong> {movieDetails.Released}
      </p>

      <p>
        <strong>Plot:</strong> {movieDetails.Plot}
      </p>
      <div  className="flex items-center gap-4 mb-4">
       
        <span >
          <button className="px-3 py-1 bg-emerald-300 rounded-xl text-sm">
           < Play size={18}/> watch trailer
          </button>{" "}
        </span>{" "}
        <span>
          <button  className="px-3 py-1 bg-blue-100/70 text-blue-800 rounded-xl text-sm">
            <Heart size={18} />
            add to favourite{" "}
          </button>
        </span>{" "}
        <span >
          <button  className="px-3 py-1 bg-blue-100/70 text-blue-800 rounded-xl text-sm">
            <Share2 size={18} /> share
          </button>
        </span>{" "}
      </div>
    </div>
  );
}

export default MovieDetails;
