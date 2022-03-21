import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Components/HomePage";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Dialogue from './Components/Dialogue'
import Search from "./Components/Search";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem("Auth")));
  console.log(isAuthenticated)
  //const authStatus = localStorage.getItem("auth");

  const setAuth = (value) => {
    setIsAuthenticated(value);
  };

  
  return (
    <>
   
    {/* <Navbar isAuthenticated={isAuthenticated}/> */}
    <Routes>
      <Route path="/" element={isAuthenticated? <HomePage setAuth={setAuth} /> : <Login setAuth={setAuth}/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  );
}

export default App;
