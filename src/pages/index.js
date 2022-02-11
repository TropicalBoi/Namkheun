import * as React from "react";
import { css } from "@emotion/css";
import Layout from "../component/layout";


const IndexPage = () => {
  return (
    <Layout>
      <div className={css`
        width: 100vw;
        height: 100vh;
        background-color: white;
      `}></div>
    </Layout>
  )
}

export default IndexPage