import React, { useState, useRef, useEffect } from "react";
import "./Create.css";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
export default function Create() {
  // Use the useFetch hook to make a POST request to the API
  let { data, error, setPostBody } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );
  // Set state for title, cooking time, method, and ingredient
  let [title, setTitle] = useState("");
  let [cookingTime, setCookingTime] = useState("");
  let [method, setMethod] = useState("");
  let ingredientInputRef = useRef(null);
  let [ingredient, setIngredient] = useState("");
  let [ingredients, setIngredients] = useState([]);

  // Use the useNavigate hook to navigate to the home page when the data is fetched
  let navigate = useNavigate();
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);
  // Handle the form submission to add an ingredient
  const handleAddIngredient = (e) => {
    e.preventDefault();
    setIngredient(ingredient.trim());
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
    }
    setIngredient("");
    ingredientInputRef.current.focus();
  };
  // Handle the form submission to create a recipe
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPostBody({
      title,
      cookingTime: cookingTime + " minutes",
      method,
      ingredients,
    });
    console.log(data);
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
