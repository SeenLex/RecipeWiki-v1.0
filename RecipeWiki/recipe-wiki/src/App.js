import Login from "./components/login/Login";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="page">
      <Router>
        <Routes>
          
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
