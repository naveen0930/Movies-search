import React from "react";

function Navbar({ totalResults }) {
  return (
    <div className="h-16  px-8 flex justify-between items-center rounded-lg p-5 bg-emerald-400 ">
      <div>
        <h1 className="font-bold text-emerald-900 text-xl">movies</h1>
      </div>

      <div>showing 10 out of {totalResults}</div>
    </div>
  );
}

export default Navbar;
