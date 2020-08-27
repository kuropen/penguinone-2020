import React from "react";
import Layout from "../components/layout";
import Box from "../components/box";
import CreativeCommons from "../components/cc/creativeCommons";
import {graphql} from "gatsby";

export default ({data}) => {
    const doc = data.markdownRemark;
    if (!doc) {
        return null;
    }
    return (
        <Layout pageTitle={doc.frontmatter.title}>
          <Box>
            <h2 className="text-xl font-bold">{doc.frontmatter.title}</h2>
            <div className="blogArticle" dangerouslySetInnerHTML={{__html: doc.html}} />
          </Box>
          <CreativeCommons />
        </Layout>
    );
};

export const query = graphql`
  query MakeMDPageQuery ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
