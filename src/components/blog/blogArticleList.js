import React from "react";
import {Link, graphql, StaticQuery} from "gatsby";
import { RichText } from 'prismic-reactjs';

export default ({className, max = 0}) => (
  <StaticQuery query={query} render={data => {
      const {prismic} = data;
      const articles = prismic.allBlogs.edges;
      let shownCount = 0;
      const listElements = articles.map((article) => {
          const {title, posting_date, _meta} = article.node;
          const id = _meta.uid;
          shownCount++;
          if (max > 0 && shownCount > max) {
              return null;
          }
          return (
            <li key={id}><Link to={`/blog/${id}`}>{RichText.asText(title)} ({posting_date})</Link></li>
          );
      });
      return (
        <ul className={className}>
            {listElements}
        </ul>
      );
  }} />
);

const query = graphql`
  query BlogArticleListQuery {
    prismic {
      allBlogs(sortBy: posting_date_DESC) {
        edges {
          node {
            title
            posting_date
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