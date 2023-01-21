import React from 'react';

export default function Query({ query, setQuery, handleSearch }) {
  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
