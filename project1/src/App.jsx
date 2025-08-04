import MovieDetails from './components/MovieDetails';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Fixed import

function App() {
  const [totalResults, setTotalResults] = useState(0);

  return (
    <div className="h-screen p-3 bg-emerald-50">
      <Navbar totalResults={totalResults} />

      <Routes>
        <Route path="/" element={<Movies setTotalResults={setTotalResults} />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} /> {/* ✅ Correct route param */}
      </Routes>
    </div>
  );
}

export default App;



