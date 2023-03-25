import "./App.css";
import Navbar from "./NavBar/Navbar";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes></Routes>
    </Router>
  );
}

export default App;
