import Login from "./components/login/Login";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Searchbar } from "./components/searchbar/Searchbar";
import { MyFavourites } from "./components/my-favourites/MyFavourites";

function App() {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/searchbar" element={<Searchbar />} />
          <Route path="/my-favourites" element={<MyFavourites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
