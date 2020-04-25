import {useStaticQuery, graphql} from "gatsby";

/**
 * ドキュメントルートのURLを取得する.
 * @return {string}
 */
export default () => {
    const {site} = useStaticQuery(query);
    const {url} = site.siteMetadata;
    return url;
};

const query = graphql`
    query WebRootUrlQuery {
        site {
            siteMetadata {
                url
            }
        }
    }
`;
