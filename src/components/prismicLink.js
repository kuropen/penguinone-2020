import React from "react";
import {Link} from "gatsby";
import {linkResolver} from "@prismicio/gatsby-source-prismic-graphql";

export default (type, element, content, children, index) => {
  if (element.data.link_type === 'Document') {
    return (
      <Link to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </Link>
    );
  }
  return null;
};
