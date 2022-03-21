import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ isAuthenticated,setAuth }) => {

  const logout = () => {
    setAuth(false);
    localStorage.setItem("Auth", JSON.stringify(false));
  };
  return !isAuthenticated ? (
    <div style={{marginLeft:10}}>
      <Link style={{ marginRight: 10,fontSize:20 }} to="/">
        Login
      </Link>

      <Link style={{fontSize:20}} to="/signup">Signup</Link>
    </div>
  ) : (
    <div style={{marginLeft:10}}>
    
    <Link style={{fontSize:20}} to="/">Home</Link>
    <Link onClick={logout} style={{marginLeft:10,fontSize:20}} to="/">Logout</Link>
    </div>
  );
};
export default Navbar;
