import React from "react";
import Layout from "../components/layout";
import BlogArticleList from "../components/blog/blogArticleList";
import {graphql, Link} from "gatsby";
import { RichText } from 'prismic-reactjs';
import Box from "../components/box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Iconbox from "../components/iconbox";
import CreativeCommons from "../components/cc/creativeCommons";

export default ({data}) => {
  console.log(data);
  if (!data) {
    return null;
  }
  const {title, posting_date, text, cover_image, _meta} = data.prismic.blog;
  const titleText = RichText.asText(title);

  const webRootUrl = data.site.siteMetadata.url;
  const ogpInfo = {
    "title": titleText,
    "type": "article",
    "url": `${webRootUrl}/blog/${_meta.uid}`,
  };
  if (cover_image) {
    ogpInfo.image = cover_image.url;
  }

  return (
      <Layout pageTitle={titleText} ogpInfo={ogpInfo}>
        <Box className="divide-y divide-gray-400">
          <div className="md:flex md:flex-row">
            <h2 className="text-xl font-orbitron mr-4">
              <Link to="/blog" className="no-underline"><FontAwesomeIcon icon={faBook}/> Blog</Link>
            </h2>
            <div>
              <h3 className="text-xl font-bold">{titleText}</h3>
              <p>この記事の初出日: {posting_date}</p>
            </div>
          </div>
          <div className="blogArticle">
            {RichText.render(text)}
          </div>
        </Box>
        <Iconbox icon={<FontAwesomeIcon icon={faBook}/>}>
          <h2 className="text-xl text-bold font-orbitron">More Blog Articles</h2>
          <BlogArticleList max="3" exclude={_meta.uid} />
          <p><Link to="/blog">すべての記事を表示する</Link></p>
        </Iconbox>
        <CreativeCommons />
      </Layout>
  );
};

export const query = graphql`
  query MakePrismicBlogPageQuery ($uid: String!) {
    site {
      siteMetadata {
        url
      }
    }
    prismic {
      blog(uid: $uid, lang:"ja-jp") {
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
`;
