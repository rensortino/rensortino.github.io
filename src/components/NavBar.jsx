import React, { useState, useEffect } from "react";  
import { Link as ScrollLink, animateScroll as scroll, Events } from 'react-scroll';
import { HashLink as NavLink } from 'react-router-hash-link';
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "../Navbar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState('100px'); // Initial navbar height
  const [activeLink, setActiveLink] = useState("about");
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  const sections = ['about', 'news', 'projects', 'publications', 'posts'];

  useEffect(() => {
    const changeNavbarHeight = () => {
      if (window.scrollY >= 80) {
        setNavbarHeight('70px'); // Reduced navbar height
      } else {
        setNavbarHeight('100px'); // Initial navbar height
      }
    }

    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((id) => {
        const element = document.getElementById(id);
        console.log(element)
        console.log(id)
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = id;
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', changeNavbarHeight);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', changeNavbarHeight);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link hover:tw-text-link";
    return (
      <ul className={listClassName}>
        {sections.map((section) => (
          <li key={section}>
            <ScrollLink
              activeClass="active"
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={linkClassName + (activeLink === section ? " active" : "")}
              onClick={closeMobileMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          </li>
        ))}
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