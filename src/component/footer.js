import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/css";

const Footer = () => {
  return (
    <div className={css`
      position: absolute;
      bottom: 0;
      width: 100vw;
      height: 9.5vh;
      background-color: white;
      box-shadow: 0px -20px 30px white;
      z-index: 100;
      `}>
      <Link to="/archive" className={css`
        position: absolute;
        width: fit-content;
        height: fit-content;
        right: 1.82vw;
        bottom: 2.85vh;
        font-family: moderat-meduim;
        font-style: normal;
        font-weight: 500;
        font-size: 3.125vw;
      `}>Archive</Link>
    </div>
  )
}

export default Footer;