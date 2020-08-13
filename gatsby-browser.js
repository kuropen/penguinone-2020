import { registerLinkResolver } from "@prismicio/gatsby-source-prismic-graphql";
import PrismicLinkResolver from "./src/utilities/PrismicLinkResolver";

import "./src/styles/global.css";

registerLinkResolver(PrismicLinkResolver);
