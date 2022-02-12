import * as React from "react";
import { graphql } from 'gatsby'
import ReactMarkdown from "react-markdown";
import { css } from "@emotion/css";
import Layout from "../component/layout";

const AboutPageTemplate = ({ data }) => {
  return (
    <Layout>
      <div className={css`
        position: absolute;
        overflow: scroll;
        scrollbar-width: none;
        width: 100vw;
        height: 100vh;
      `}>
        <div className={css`
          width: 100vw;
          height: 305.59vh;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        `}>
          <div className={css`
            width: 62.55vw;
            height: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}>
            <ReactMarkdown source={data.page.html} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPageTemplate;


AboutPageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};


export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
