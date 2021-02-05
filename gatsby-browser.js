import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { registerLinkResolver } from "@prismicio/gatsby-source-prismic-graphql";
import PrismicLinkResolver from "./src/utilities/PrismicLinkResolver";

import "./src/styles/global.css";

registerLinkResolver(PrismicLinkResolver);

export const wrapRootElement = ({element}) => {
    return (
        <SimpleReactLightbox>{element}</SimpleReactLightbox>
    );
};
