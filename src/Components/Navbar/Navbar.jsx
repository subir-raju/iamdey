import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [navbarOffset, setNavbarOffset] = useState(0);
  const menuRef = useRef();
  const lastScrollY = useRef(0);
  const currentOffset = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation(); 
  const navbarHeight = 90; // Approximate height of the navbar

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

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const deltaY = scrollY - lastScrollY.current;

    // Calculate new offset
    let newOffset = currentOffset.current - deltaY;

    // Clamp between -navbarHeight and 0
    if (newOffset > 0) newOffset = 0;
    if (newOffset < -navbarHeight) newOffset = -navbarHeight;

    // If we are at the very top, always show navbar
    if (scrollY <= 0) newOffset = 0;

    setNavbarOffset(newOffset);
    currentOffset.current = newOffset;
    lastScrollY.current = scrollY;
  };

  const scrollToBottom = () => {
    closeMenu(); 
    window.scrollTo({
      top: document.documentElement.scrollHeight, 
      behavior: "smooth", 
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset navbar when changing pages
  useEffect(() => {
    setNavbarOffset(0);
    currentOffset.current = 0;
    lastScrollY.current = window.scrollY;
  }, [location.pathname]);

  return (
    <div
      className="navbar"
      style={{ transform: `translateY(${navbarOffset}px)` }}
    >
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
