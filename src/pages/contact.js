import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/css";

const Contact = () => {
  return (
    <div className={css`
        position: absolute;
        overflow: scroll;
        scrollbar-width: none;
        width: 100vw;
        height: 100vh;
        visibility: hidden;
      `}>
      <p className={css`
          position: absolute;
          width: 766px;
          height: 576px;
          left: 50vw;
          top: 220px;
          font-family: moderat-meduim;
          font-style: normal;
          font-weight: 500;
          font-size: 60px;
          letter-spacing: 0.02em;
        `}>
        Alternatively, check out
        our social media accounts
        for regular updates.<br></br>
        <br></br>
        IG @namkheun<br></br>
        Twitter @namkheun<br></br>
        FB น้ำขึ้น Namkheun<br></br>
        Info@namkheun.com
      </p>
    </div>
  )
}

export default Contact;