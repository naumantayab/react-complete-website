import React from "react";
import { NavLink } from "react-router-dom";
import "./router.css";
const Menu = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink exact className="link" activeClassName="active_class" to="/">
          Home
        </NavLink>
        <NavLink exact className="link" activeClassName="active_class" to="/about">
          About US
        </NavLink>
        <NavLink
          exact
          className="link"
          activeClassName="active_class"
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          exact
          className="link"
          activeClassName="active_class"
          to="/search"
        >
          Search
        </NavLink>
        <NavLink
          exact
          className="link"
          activeClassName="active_class"
          to="/user/nauman/tayyab"
        >
          User
        </NavLink>
        <NavLink
          exact
          className="link"
          activeClassName="active_class"
          to="/contact"
        >
          Contact US
        </NavLink>
      </div>
      {/* <a href="/">About US</a>
      <a href="/contact">Contact US</a> */}
    </>
  );
};

export default Menu;
