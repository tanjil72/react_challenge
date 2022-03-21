import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import { useState } from "react";

import NaviBar from "./Components/Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("Auth"))
  );

 const setAuth = (value) => {
    setIsAuthenticated(value);
  };

  return (
    <>
      <NaviBar isAuthenticated={isAuthenticated} setAuth={setAuth}/>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <HomePage setAuth={setAuth} />
            ) : (
              <Login setAuth={setAuth} />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      
    </>
  );
}

export default App;
