import React from 'react';
import {Elements} from "prismic-reactjs";
import { Link } from "gatsby";
import { linkResolver } from "@prismicio/gatsby-source-prismic-graphql"

const PrismicHtmlSerializer = (type, element, content, children, key) => {
  switch (type) {
    case Elements.image:
      const optimizedSrc = `${element.url}&w=480&h=320`;
      const alt = element.alt || '';
      return (<img src={optimizedSrc} alt={alt} key={key} />);
    case Elements.hyperlink:
      if (element.data.link_type === 'Document') {
        return (
          <Link to={linkResolver(element.data)} key={element.data.id}>
            {content}
          </Link>
        );
      }
      return null;
    default:
      return null;
  }
};

export default PrismicHtmlSerializer;
