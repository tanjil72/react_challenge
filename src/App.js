import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom"
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/home" element={ <HomePage/> } />
      </Routes>
    </div>
  );
}

export default App;
