import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";

function Search() {
  return (
    <div className="searchContainer">
      <h1>Nu ai găsit ce căutai? Incearcă aici!</h1>
      <input type="text" placeholder="🔎" />
      {/* <div>
        <SearchIcon />
      </div> */}
    </div>
  );
}

export default Search;
