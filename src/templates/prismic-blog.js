import React from "react";
import Layout from "../components/layout";
import BlogArticleList from "../components/blog/blogArticleList";
import {graphql, Link} from "gatsby";
import { RichText } from 'prismic-reactjs';
import getWebRootUrl from "../utilities/getWebRootUrl";

export default ({data}) => {
  const articles = data.prismic.allBlogs.edges;
  if (articles.length < 1) {
    return null;
  }
  const {title, posting_date, text, cover_image, _meta} = articles.pop().node;
  const titleText = RichText.asText(title);

  const webRootUrl = getWebRootUrl();
  const ogpInfo = {
    "title": titleText,
    "type": "article",
    "url": `${webRootUrl}/blog/${_meta.id}`,
    "image": cover_image.url,
  };

  return (
      <Layout pageTitle={titleText} ogpInfo={ogpInfo}>
          <div className="md:flex md:flex-row mb-4">
            <div className="hidden md:block md:w-1/4">
              <h2 className="p-4 bg-purple-200 text-black border-purple-200 rounded border text-xl">Blog</h2>
              <div className="p-4 border-purple-200 rounded border">
                <BlogArticleList />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="p-4 bg-purple-200 text-black border-purple-200 rounded border text-xl">{titleText}</h3>
              <div className="p-4 border-purple-200 rounded border blogArticle">
                <p>この記事の初出日: {posting_date}</p>
                <hr />
                {RichText.render(text)}
              </div>
            </div>
            <div className="md:hidden p-4 border-purple-200 rounded border">
              <Link to="/blog">ブログ記事の一覧に戻る</Link>
            </div>
          </div>
      </Layout>
  );
};

export const query = graphql`
  query MakePrismicBlogPageQuery ($id: String!) {
    prismic {
      allBlogs(id: $id) {
        edges {
          node {
            title
            posting_date
            text
            cover_image
            _meta {
              id
              uid
            }
          }
        }
      }
    }
  }
`;
