import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ videoId }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    axios
      .post(`/api/videos/${videoId}/search/`, { query })
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.error("Search error", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {result && (
        <div>
          <p>{result.text}</p>
          <p>Start Time: {result.start_time}</p>
          <p>End Time: {result.end_time}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
