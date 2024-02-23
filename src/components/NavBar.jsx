import React, { useState, useEffect } from "react";  
import { HashLink as NavLink } from 'react-router-hash-link';

import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "../Navbar.css";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState('100px'); // Initial navbar height
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  useEffect(() => {
    const changeNavbarHeight = () => {
      if (window.scrollY >= 80) {
        setNavbarHeight('70px'); // Reduced navbar height
      } else {
        setNavbarHeight('100px'); // Initial navbar height
      }
    }

    window.addEventListener('scroll', changeNavbarHeight);
    return () => {
      window.removeEventListener('scroll', changeNavbarHeight);
    }
  }, []);


  const toggleMenu = () => {
    console.log(isMenuOpen)
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMobileMenu = () => {
    console.log(isMobile)
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";
    return (
      <ul className={listClassName}>
        <li>
          <NavLink
            to="#about"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#news"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#projects"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#publications"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Publications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#posts"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Posts
          </NavLink>
        </li>
      </ul>
    );
  };
  return (
    <div className="header" style={{height: navbarHeight}}>
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Renato Sortino
        </NavLink>
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}
        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </div>
  );
};
export default NavBar;