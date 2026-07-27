import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const menuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation(); 

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
    setMenuOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
    setMenuOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const scrollToBottom = () => {
    closeMenu(); 
    window.scrollTo({
      top: document.documentElement.scrollHeight, 
      behavior: "smooth", 
    });
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <img
        src={menu_open}
        onClick={openMenu}
        alt="menu open"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="menu close"
          className="nav-mob-close"
        />
        <li onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/research">Research</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      {location.pathname === "/" && (
        <div className="nav-connect">
          <p onClick={scrollToBottom}>Let's talk</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
