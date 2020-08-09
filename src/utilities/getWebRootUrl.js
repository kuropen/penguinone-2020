import React from "react";
import {StaticQuery, graphql} from "gatsby";

/**
 * ドキュメントルートのURLを取得する.
 * @return {string}
 */
export default () => (<StaticQuery query={query} render={data => {
    const {site} = data;
    const {url} = site.siteMetadata;
    return url;
}} />);

const query = graphql`
    query WebRootUrlQuery {
        site {
            siteMetadata {
                url
            }
        }
    }
`;
