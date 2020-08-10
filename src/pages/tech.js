import React from "react";
import Layout from "../components/layout";
import TechArticleList from "../components/tech/techArticleList";
import {graphql} from "gatsby";
import Iconbox from "../components/iconbox";
import CreativeCommons from "../components/cc/creativeCommons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJournalWhills, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import QiitaNotice from "../components/tech/qiitaNotice";

export default ({data}) => {
    const articles = data.allMarkdownRemark.nodes;
    return (
        <Layout pageTitle="Tech Articles">
          <QiitaNotice />
          <Iconbox icon={<FontAwesomeIcon icon={faJournalWhills}/>}>
            <h2 className="text-xl font-orbitron">Tech Articles</h2>
            <TechArticleList articles={articles} />
          </Iconbox>
          <CreativeCommons />
        </Layout>
    );
};

export const query = graphql`
  query TechArticleListQuery {
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
