import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">
        f<span className="logo-AR">AR</span>nitures
      </span>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/desks">Desks</Link>
        <Link to="/chairs">Chairs</Link>
        <Link to="/lamps">Lamps</Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
