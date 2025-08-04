import React from "react";

function Searchbar({ handleSubmit, query, setQuery }) {
  return (
    <div>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          className=" placeholder:font-medium bg-emerald-200 border-emerald-900 rounded-lg  outline-emerald-900 w-96 px-3 py-2"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies...."
        />
        <button className="px-6 py-2 rounded-lg bg-emerald-200 border border-emerald-900 text-emerald-900">
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
