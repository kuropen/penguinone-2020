import React from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import AboutLanguageList from "../components/about/aboutLanguageList";

export default ({data}) => {
    const articles = data.allMarkdownRemark.nodes;
    const doc = data.markdownRemark;
    if (!doc) {
        return null;
    }
    return (
        <Layout pageTitle={doc.frontmatter.title}>
            <h2 className="p-4 bg-teal-200 text-black border-teal-200 rounded border text-xl">{doc.frontmatter.title}</h2>
            <div
                className="p-4 border-teal-200 rounded border">
                <AboutLanguageList articles={articles} className="aboutLanguageList" />
            </div>
            <div
                className="mb-4 p-4 border-teal-200 rounded border blogArticle"
                dangerouslySetInnerHTML={{__html: doc.html}}>
            </div>
        </Layout>
    );
};

export const query = graphql`
  query MakeMDAboutPageQuery ($id: String!) {
    markdownRemark(id: {eq: $id}) {
        id
        html
        frontmatter {
          title
        }
        fileAbsolutePath
      }
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            lang
          }
          fileAbsolutePath
        }
      }
  }
`;
