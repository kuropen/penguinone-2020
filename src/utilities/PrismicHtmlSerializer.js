import React from 'react';
import {Elements} from "prismic-reactjs";
import { Link } from "gatsby";
import { linkResolver } from "@prismicio/gatsby-source-prismic-graphql";

const PrismicHtmlSerializer = (type, element, content, children, key) => {
  switch (type) {
    case Elements.image:
      const imageBaseUrl = element.url;
      const optimizedSrc = `${imageBaseUrl}&w=480&h=320`;
      const alt = element.alt || '';
      return (
        <a href={imageBaseUrl} className="inline-block">
          <img src={optimizedSrc} alt={alt} key={key} />
        </a>
      );
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
