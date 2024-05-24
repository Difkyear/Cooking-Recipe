import React, { useState, useRef } from "react";
import "./Create.css";
import { useFetch } from "../../hooks/useFetch";
export default function Create() {
  let { data, error, setPostBody } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );
  // Declare an state variable called title and initialize it with an empty string
  let [title, setTitle] = useState("");
  // Declare an state variable called cookingTime and initialize it with an empty string
  let [cookingTime, setCookingTime] = useState("");
  // Declare an state variable called method and initialize it with an empty string
  let [method, setMethod] = useState("");
  let ingredientInputRef = useRef(null);
  // Declare an state variable called ingredient and initialize it with an empty string
  let [ingredient, setIngredient] = useState("");
  // Declare an state variable called ingredients and initialize it with an empty array
  let [ingredients, setIngredients] = useState([]);

  // Call a function called handleAddIngredient and pass it an event parameter
  const handleAddIngredient = (e) => {
    // Prevent the default action of the form submission
    e.preventDefault();
    // Set the ingredient state variable to the value of the input field
    setIngredient(ingredient.trim());
    // If the ingredient is not empty and not already in the ingredients array, add it to the array
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
    }
    // Set the ingredient state variable to an empty string
    setIngredient("");
    ingredientInputRef.current.focus();
  };
  // Call a function called handleSubmit and pass it an event parameter
  const handleSubmit = (e) => {
    // Prevent the default action of the form submission
    e.preventDefault();
    // Set the postBody state variable to an object with properties title, cookingTime, method, and ingredients
    setPostBody({
      title,
      cookingTime: cookingTime + " minutes",
      method,
      ingredients,
    });
  };
  // Return a div containing a form with onSubmit set to the handleSubmit function
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
            ref={ingredientInputRef}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br></br>
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
          <br></br>
        </label>
        <span>Ingredient</span>
        <label>
          <div className="ingredients">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
            <button type="submit" onClick={handleAddIngredient}>
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredient:
          {ingredients.map((i) => (
            <em key={i}>{i},</em>
          ))}
        </p>
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
          <br></br>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
