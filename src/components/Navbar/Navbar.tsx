import { NavLink } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">
        f<span className="logo-AR">AR</span>nitures
      </span>
      <nav className="links left">
        {/* Link vs NavLink we are getting an active 'class' attribute in the DOM*/}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/desks">Desks</NavLink>
        <NavLink to="/chairs">Chairs</NavLink>
        <NavLink to="/lamps">Lamps</NavLink>
        <NavLink to="/contact"> Contact </NavLink>
      </nav>
      <nav className="links right">
        <NavLink to="/login"> Sign Up </NavLink>
        <NavLink to="/login"> Log In </NavLink>
        <NavLink to="/cart">
          <RiShoppingCart2Line size={32} />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
