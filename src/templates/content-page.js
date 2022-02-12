import * as React from "react";
import PropTypes from "prop-types"
import { graphql } from 'gatsby'
import Layout from "../component/layout";

const ContentPageTemplate = ({ data }) => {
  console.log(data.markdownRemark.html)
  return (
    <Layout>

      <div className="engTxtContent">
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>

      {/* <ReactMarkdown source={data.markdownRemark.html} /> */}

    </Layout>
  )
}

export default ContentPageTemplate;


ContentPageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};


export const contentPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
