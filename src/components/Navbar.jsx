import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

// styles
import "./Navbar.css";
import SearchBar from "./SearchBar";

export default function Navbar() {
  let { color } = useTheme();
  return (
    <div className="navbar" style={{ backgroundColor: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninjia</h1>
        </Link>
        <SearchBar />
        <Link to="/Create">Create Recipe</Link>
      </nav>
    </div>
  );
}
