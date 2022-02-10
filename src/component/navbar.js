import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/css";
import searchIcon from "../images/SearchIcon.png";

const Navbar = () => {
  return (
    <div className={css`
          position: absolute;
          top: 0;
          width: 100%;
          height: 20vh;
          font-family: moderat-meduim;
          font-style: normal;
          font-weight: 500;
          font-size: 3.125vw;
          background-color: white;
          box-shadow: 0px 20px 30px white;
          z-index: 100;
        `}>
      <div className={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: absolute;
            top: 3.69vh;
            left: 1.82vw;
          `}>
        <Link to="/" >Namkheun Collective</Link>
        <div className={css`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          `}>
          <Link to="/about" className="MenuLink">About</Link>
          <Link to="/projects" className="MenuLink">Projects</Link>
          <Link to="/contact" className="MenuLink">Contact</Link>
        </div>
      </div>
      <img
        src={searchIcon}
        className={css`
          position: absolute;
          width: 2.6vw;
          height: auto;
          top: 3.69vh;
          right: 1.82vw;
        `}
        alt="search"
      />
    </div>
  )
}

export default Navbar