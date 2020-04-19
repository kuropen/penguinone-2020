import React from "react";
import Layout from "../components/layout";
import TechArticleList from "../components/tech/techArticleList";
import {graphql, Link} from "gatsby";

export default ({data}) => {
  const articles = data.allMarkdownRemark.nodes;
  const doc = data.markdownRemark;
  if (!doc) {
      return null;
  }
  return (
      <Layout>
          <div className="md:flex md:flex-row mb-4">
            <div className="hidden md:block md:w-1/4 p-4 border-purple-200 rounded border">
              <h3 className="font-bold">技術記事 記事一覧</h3>
              <TechArticleList articles={articles} />
            </div>
            <div className="md:w-3/4">
              <h2 className="p-4 bg-purple-200 text-black border-purple-200 rounded border text-xl">{doc.frontmatter.title}</h2>
              <div
                className="p-4 border-purple-200 rounded border"
                dangerouslySetInnerHTML={{__html: doc.html}}>
              </div>
            </div>
            <div className="md:hidden p-4 border-purple-200 rounded border">
              <Link to="/tech">技術記事の一覧に戻る</Link>
            </div>
          </div>
      </Layout>
  );
};

export const query = graphql`
  query MakeMDTechPageQuery ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
        }
        fileAbsolutePath
      }
    }
  }
`;
