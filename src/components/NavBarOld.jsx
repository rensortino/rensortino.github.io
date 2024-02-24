import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../Navbar.css"

const NavBar = () => {
  // return (
  //   <div className="tw-fixed tw-top-0 tw-w-full tw-flex tw-bg-stone-800 tw-flex-row-reverse tw-z-50">
  //     <ul className="tw-flex tw-justify-around tw-p-5 tw-w-1/2">
  //       <li>
  //         <Link to="#about" className="text-black hover:bg-gray-200 px-2 py-1">About</Link>
  //       </li>
  //       <li>
  //         <Link to="#projects" className="text-black hover:bg-gray-200 px-2 py-1">Projects</Link>
  //       </li>
  //       <li>
  //         <Link to="#publications" className="text-black hover:bg-gray-200 px-2 py-1">Publications</Link>
  //       </li>
  //       <li>
  //         <Link to="#posts" className="text-black hover:bg-gray-200 px-2 py-1">Posts</Link>
  //       </li>
  //     </ul>
  //   </div>
  // );

  const [showMenu, setShowMenu] = useState(false);

 const toggleMenu = () => {
   setShowMenu(!showMenu);
 };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
      <div className="tw-fixed tw-top-0 tw-w-full tw-flex tw-bg-stone-800 tw-flex-row-reverse tw-z-50">
        <nav className="nav container">
          {/* <NavLink to="/" className="nav__logo">
            Navigation Bar
          </NavLink> */}
   
          <div
            className={"nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="#news" className="nav__link" 
                onClick={closeMenuOnMobile}>
                  News
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="#about"
                  className="nav__link" 
                  onClick={closeMenuOnMobile}
                >
                  About
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="#projects"
                  className="nav__link" 
                  onClick={closeMenuOnMobile}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="#publications"
                  className="nav__link" 
                  onClick={closeMenuOnMobile}
                >
                  Publications
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/get-started" className="nav__link nav__cta"  
                >
                  Get Started
                </NavLink>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
   
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        </nav>
      </div>
  );
}

export default NavBar;