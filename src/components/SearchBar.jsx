import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// styles
import "./SearchBar.css";
export default function SearchBar() {
  let Navigate = useNavigate();
  let [term, SetTerm] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    Navigate(`/search/?q=${term}`);
    SetTerm("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="search-bar">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={term}
          required
          onChange={(e) => {
            SetTerm(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
