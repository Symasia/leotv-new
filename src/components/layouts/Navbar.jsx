import React, { useEffect } from "react";
import getNewsData from "../../services/getNewsData.js";
import { useStateContext } from "../../contexts/Context.jsx";
import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Layouts.css";

const Navbar = () => {
    //eslint-disable-next-line
  const [state, dispatch] = useStateContext();
  useEffect(() => getNewsData(dispatch), [dispatch]);

  return (
    <header>
      <Link to="/" className="nav-brand">
        <img src={logo} alt="" height="40px" />
        LeoTV
      </Link>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <FaBars />
      </label>
      <input id="nav-toggle" type="checkbox" className="nav-toggle" />
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" activeClassName="nav-link-active" exact={true}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" activeClassName="nav-link-active">
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName="nav-link-active">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="nav-link-active">
              Contact
            </NavLink>
          </li>
          <li>
            <button className="nav-login" data-type="light">
              <Link to="/">Login</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
