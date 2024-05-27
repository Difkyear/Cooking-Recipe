import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Recipe from "./pages/Recipe/Recipe";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar";
import ThemeSelect from "./components/ThemeSelect";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelect />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Create" element={<Create />}></Route>
          <Route path="/Recipe/:id" element={<Recipe />}></Route>
          <Route path="/Search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
