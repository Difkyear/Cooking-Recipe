// import React from "react";
// import { useLocation } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";
// import RecipeList from "../../components/RecipeList";

// export default function Search() {
//   let queryString = useLocation().search;
//   let queryParams = new URLSearchParams(queryString);
//   let query = queryParams.get("q");
//   const url = "http://localhost:3000/recipes?q=" + query;
//   let { data, isPending, error } = useFetch(url);
//   return (
//     <div>
//       {query && <h2 className="page-title">Page {query}</h2>}
//       {error && <h2 className="error"> {error}</h2>}
//       {isPending && <h2 className="loding"> Loding...</h2>}
//       {data && <RecipeList recipe={data} />}
//     </div>
//   );
// }
import { useFetch } from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";

// styles
// import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?title=" + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipe={data} />}
    </div>
  );
}
