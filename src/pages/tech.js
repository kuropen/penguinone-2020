import React from "react";
import Layout from "../components/layout";
import TechArticleList from "../components/tech/techArticleList";
import {graphql} from "gatsby";

export default ({data}) => {
    const articles = data.allMarkdownRemark.nodes;
    return (
        <Layout pageTitle="Tech Articles">
            <h2 className="p-4 bg-purple-200 text-black border-purple-200 rounded border text-xl">Tech Articles: 技術記事</h2>
            <div className="p-4 border-purple-200 rounded border">
                ここにある記事は、かつて Qiita に投稿した記事です。
                Qiitaのプライバシー問題に伴い、現在筆者はQiitaの利用を停止しているため、
                その記事をバックアップして掲載しています。<br />
                ※今後、新規の記事を掲載する場合もあります。
            </div>
            <div className="mb-4 p-4 border-purple-200 rounded border">
                <TechArticleList articles={articles} />
            </div>
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
