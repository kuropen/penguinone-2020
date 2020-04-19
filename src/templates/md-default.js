import React from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";

export default ({data}) => {
    const doc = data.markdownRemark;
    if (!doc) {
        return null;
    }
    return (
        <Layout>
            <h2 className="p-4 bg-gray-100 text-black border-gray-100 rounded border text-xl">{doc.frontmatter.title}</h2>
            <div
                className="mb-4 p-4 border-gray-100 rounded border"
                dangerouslySetInnerHTML={{__html: doc.html}}>
            </div>
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
