import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../redux/actions";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const loading = useSelector((state) => state.loading);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchSongs(query));
  };

  return (
    <div className="text-white">
      <form onSubmit={handleFormSubmit}>
        <label>
          Search songs:
          <input type="text" value={query} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      <ul>
        {songs &&
          songs.map((song) => <li key={song.id}>{song.data.duration}</li>)}
      </ul>
    </div>
  );
};

export default Search;
