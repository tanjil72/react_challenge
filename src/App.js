import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Components/HomePage";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={
        isAuthenticated?<HomePage />:<Login setAuth={setAuth}/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
