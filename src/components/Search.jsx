import { useEffect, useState } from "react";
// import AlbumCard from "./AlbumCard";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const search = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`,
        {
          method: "GET",
        }
      ); // gets the information

      if (response.ok) {
        const result = await response.json();
        setSearchResults(result.data);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    search();
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        id="searchField"
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={search}>Search</button>
      <div id="searchResults">
        <div className="row">
          {/* {searchResults.map((song) => (
            // <AlbumCard key={song.id} songInfo={song} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
