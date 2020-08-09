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
  const pathMatch = doc.fileAbsolutePath.match(/md-pages\/(.*)\.md$/);
  const pagePath = pathMatch[1];
  const webRootUrl = data.site.siteMetadata.url;
  const ogpInfo = {
    "title": doc.frontmatter.title,
    "type": "article",
    "url": `${webRootUrl}/${pagePath}`,
  };
  return (
      <Layout pageTitle={doc.frontmatter.title} ogpInfo={ogpInfo}>
          <div className="md:flex md:flex-row mb-4">
            <div className="hidden md:block md:w-1/4">
              <h2 className="p-4 bg-purple-200 text-black border-purple-200 rounded border text-xl">Tech Articles</h2>
              <div className="p-4 border-purple-200 rounded border">
                <TechArticleList articles={articles} />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="p-4 bg-purple-200 text-black border-purple-200 rounded border text-xl">{doc.frontmatter.title}</h3>
              <div
                className="p-4 border-purple-200 rounded border blogArticle"
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
    site {
      siteMetadata {
        url
      }
    }
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
        }
        fileAbsolutePath
      }
    }
  }
`;
