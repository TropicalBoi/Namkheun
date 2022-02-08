import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/css";

const Navbar = () => {
  return (
    <div className={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          position: absolute;
          width: 100%;
          height: 166px;
          padding-left: 35px;
          padding-top: 35px;
          font-family: moderat-meduim;
          font-style: normal;
          font-weight: 500;
          font-size: 60px;
          background-color: white;
          box-shadow: 0px 20px 30px white;
          z-index: 100;
        `}>
      <Link to="/" >Namkheun Collective</Link>
      <div className={css`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          `}>
        <Link className="MenuLink">About</Link>
        <Link className="MenuLink">Projects</Link>
        <Link className="MenuLink">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar