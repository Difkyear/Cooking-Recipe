import React from "react";
// styles
import "./RecipeList.css";
import { Link } from "react-router-dom";
export default function RecipeList(props) {
  let { recipe } = props;
  return (
    <div className="recipe-List">
      {recipe.map((item) => {
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
