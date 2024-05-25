import React from "react";
// styles
import "./RecipeList.css";
import { Link } from "react-router-dom";
// Export a default function called RecipeList that takes a single parameter, props
export default function RecipeList(props) {
  // Destructure the property, recipe, from the props parameter
  let { recipe } = props;
  // Return a div containing a map of the recipe array, with a key and style
  if (recipe.length === 0) {
    return <div className="error">There is no item to load</div>;
  }
  return (
    <div className="recipe-List">
      {recipe.map((item) => {
        // Return a div containing the recipe title, cooking time, and method, with a key and style
        return (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.cookingTime}to make</p>
            <p>{item.method.substring(0, 100)}...</p>
            <Link to={`/Recipe/${item.id}`}>Cook This</Link>
          </div>
        );
      })}
    </div>
  );
}
