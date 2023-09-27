import React, { useState } from 'react';

function Top5MovieSelection() {
  const [topMovies, setTopMovies] = useState(['', '', '', '', '']);

  const handleMovieChange = (e, index) => {
    const newMovies = [...topMovies];
    newMovies[index] = e.target.value;
    setTopMovies(newMovies);
  };

  // You can integrate Firebase to save the top 5 movies

  return (
    <div>
      <h2>Top 5 Movie Selection</h2>
      {topMovies.map((movie, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Movie ${index + 1}`}
          value={movie}
          onChange={(e) => handleMovieChange(e, index)}
        />
      ))}
    </div>
  );
}

export default Top5MovieSelection;
