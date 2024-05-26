import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

// styles
import "./Navbar.css";
import SearchBar from "./SearchBar";

export default function Navbar() {
  let { color, updateThemeState } = useTheme();
  return (
    <div className="navbar" style={{ backgroundColor: color }}>
      <nav
        onClick={() => {
          updateThemeState("pink");
        }}
      >
        <Link to="/" className="brand">
          <h1>Cooking Ninjia</h1>
        </Link>
        <SearchBar />
        <Link to="/Create">Create Recipe</Link>
      </nav>
    </div>
  );
}
