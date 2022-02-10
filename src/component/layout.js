import * as React from "react";
import { css } from "@emotion/css";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className={css`
      width: 100vw;
      height: 100vh;
    `}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Namkheun Collective</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}