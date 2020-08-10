import React from "react";
import Layout from "../components/layout";
import TechArticleList from "../components/tech/techArticleList";
import {graphql, Link} from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJournalWhills } from "@fortawesome/free-solid-svg-icons"
import CreativeCommons from "../components/cc/creativeCommons";
import Box from "../components/box";
import Iconbox from "../components/iconbox";
import QiitaNotice from "../components/tech/qiitaNotice";

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
        <QiitaNotice />
        <Box>
          <div className="md:flex md:flex-row">
            <h2 className="text-xl font-orbitron mr-4">
              <Link to="/tech" className="no-underline"><FontAwesomeIcon icon={faJournalWhills}/> Tech Articles</Link>
            </h2>
            <div>
              <h3 className="text-xl font-bold">{doc.frontmatter.title}</h3>
            </div>
          </div>
          <div className="blogArticle" dangerouslySetInnerHTML={{__html: doc.html}} />
        </Box>
        <Iconbox icon={<FontAwesomeIcon icon={faJournalWhills}/>}>
          <h2 className="text-xl text-bold font-orbitron">Selected Tech Articles</h2>
          <TechArticleList articles={articles} />
          <p><Link to="/tech">Read More</Link></p>
        </Iconbox>
        <CreativeCommons />
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
    allMarkdownRemark(limit: 3, filter: {fileAbsolutePath: {regex: "/tech/"}}) {
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
