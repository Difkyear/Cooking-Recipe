import React, { useState } from "react";
import "./Create.css";
export default function Create() {
  let [title, setTitle] = useState("");
  let [cookingTime, setCookingTime] = useState("");
  let [method, setMethod] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, cookingTime, method);
  };
  return (
    <div className="create">
      <h2>Add a Recipe</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Recipe Method</span>
          <textarea
            type="text"
            value={method}
            required
            onChange={(e) => {
              setMethod(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Cooking Time</span>
          <input
            type="number"
            value={cookingTime}
            required
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
