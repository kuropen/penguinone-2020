import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import { RichText } from 'prismic-reactjs';

export default ({className}) => {
    const {prismic} = useStaticQuery(query);
    const articles = prismic.allBlogs.edges;
    const listElements = articles.map((article) => {
        const {title, posting_date, _meta} = article.node;
        const id = _meta.id;
        return (
            <li key={id}><Link to={`/blog/${id}`}>{RichText.asText(title)} ({posting_date})</Link></li>
        );
    });
    return (
        <ul className={className}>
            {listElements}
        </ul>
    );
};

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