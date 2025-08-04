import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Moviecard from "./Moviecard";
import Searchbar from "./Searchbar";

function Movies({ setTotalResults }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  console.log(query);
  console.log(movies);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://www.omdbapi.com/?s=${query}&apikey=8a2cbff9`)
      .then((res) => {
        console.log(res.data);
        setTotalResults(res.data.totalResults);
        setMovies(res.data.Search);
        setIsLoading(false);
      });
  };
  return (
    <div>
      <div className="flex justify-center mt-20">
        <Searchbar
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        />
      </div>
      {/* {isLoading && <p>Searching...</p>} */}
      {isLoading ? (
        <p>Searching...</p>
      ) : (
        <div  className=" grid  grid-cols-3 gap-3 p-4">
          {movies.map((movie) => (
            <Moviecard
             movie={movie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;
