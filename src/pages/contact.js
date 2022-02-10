import * as React from "react";
import { css } from "@emotion/css";
import Layout from "../component/layout";
import "../css/global.css";

const Contact = () => {
  return (
    <Layout>
      <div className={css`
        width: 100vw;
        height: 90vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        font-family: moderat-meduim;
        font-style: normal;
        font-weight: 500;
        font-size: 3.125vw;
        letter-spacing: 0.02em;
        padding-top: 8vh;
      `}>
        <p className={css`
          width: 23.02vw;
          height: 32.2vh;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}>
          Sign up for<br></br>
          our mailing list:<br></br>
          <input
            className={css`
              width: 41.66vw;
              border: none;
              color: #C4C4C4;
              font-family: moderat-meduim;
              font-style: normal;
              font-weight: 500;
              font-size: 3.125vw;
              letter-spacing: 0.02em;
              text-align: center;
            `}
            type="text"
            placeholder="Your email here" /><br></br>
          <input
            className={css`
              border: none;
              color: #000000;
              font-family: moderat-meduim;
              font-style: normal;
              font-weight: 500;
              font-size: 3.125vw;
              letter-spacing: 0.02em;
              text-align: center;
            `}
            type="submit"
            value="Subscibe" />
        </p>
        <p className={css`
          width: 39.89vw;
          height: 60.82vh;
        `}>
          Alternatively, check out
          our social media accounts
          for regular updates.
          <br></br>
          <br></br>
          IG <a href="https://www.instagram.com/namkheun/">@namkheun</a>
          <br></br>
          Twitter <a href="https://twitter.com/namkheun">@namkheun</a>
          <br></br>
          FB <a href="https://www.facebook.com/namkheun"><span>น้ำขึ้น</span> Namkheun</a>
          <br></br>
          Info@namkheun.com
        </p>
      </div>
    </Layout >
  )
}

export default Contact;