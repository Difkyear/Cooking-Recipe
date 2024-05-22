import React from "react";
import "./Home.css";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
export default function Home() {
  let {
    data: recipe,
    error,
    isPending,
  } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="Home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loding">loding...</p>}
      {recipe && <RecipeList recipe={recipe} />}
    </div>
  );
}
