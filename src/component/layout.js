import * as React from "react";
import { css } from "@emotion/css";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className={css`
      width: 100vw;
      height: 100vh;
    `}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}