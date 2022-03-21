import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ isAuthenticated }) => {
  return isAuthenticated=="false" ? (
    <div>
      <ul>
        <Link to="/">Login</Link>

        <Link to="/signup">Signup</Link>
      </ul>
    </div>
  ) : (
    <Link to="/">Home</Link>
  );
};
export default Navbar;
