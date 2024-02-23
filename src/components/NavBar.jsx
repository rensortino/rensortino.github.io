import React from 'react';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';



const NavBar = () => {
  return (
    <div className="tw-fixed tw-top-0 tw-w-full tw-flex tw-bg-stone-800 tw-flex-row-reverse tw-z-50">
      <ul className="tw-flex tw-justify-around tw-p-5 tw-w-1/2">
        <li>
          <Link to="#about" className="text-black hover:bg-gray-200 px-2 py-1">About</Link>
        </li>
        <li>
          <Link to="#projects" className="text-black hover:bg-gray-200 px-2 py-1">Projects</Link>
        </li>
        <li>
          <Link to="#publications" className="text-black hover:bg-gray-200 px-2 py-1">Publications</Link>
        </li>
        <li>
          <Link to="#posts" className="text-black hover:bg-gray-200 px-2 py-1">Posts</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;