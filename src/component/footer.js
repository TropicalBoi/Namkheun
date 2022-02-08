import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/css";

const Footer = () => {
  return (
    <div className={css`
      position: absolute;
      bottom: 0;
      width: 100vw;
      height: 120px;
      background-color: white;
      box-shadow: 0px -20px 30px white;
      z-index: 100;
      `}>
      <Link className={css`
        position: absolute;
        width: fit-content;
        height: fit-content;
        right: 35px;
        bottom: 27px;
        font-family: moderat-meduim;
        font-style: normal;
        font-weight: 500;
        font-size: 60px;
      `}>Archive</Link>
    </div>
  )
}

export default Footer;