import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
// styles
import "./Recipe.css";
export default function Recipe() {
  let { id } = useParams();
  let { data, error, isPending } = useFetch(
    `http://localhost:3000/recipes/${id}`
  );
  return (
    <div className="recipe">
      {error && <div className="error">{error}</div>}{" "}
      {isPending && <div className="loding">Loding...</div>}
      {data && (
        <>
          <h1>{data.title}</h1>
          <p>take {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{data.method}</p>
        </>
      )}
    </div>
  );
}
