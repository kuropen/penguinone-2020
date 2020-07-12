import React from "react";
import { Helmet } from "react-helmet"
import {useStaticQuery, graphql, Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

export default ({ children, hideHomeBtn, pageTitle, ogpInfo }) => {
    const {site} = useStaticQuery(query);
    const {title, image, url} = site.siteMetadata;
    const faviconFullPath = `${url}${image}`;
    const defaultOgpInfo = {
        "title": title,
        "type": "website",
        "url": url,
        "image": faviconFullPath,
        "site_name": title,
    };
    ogpInfo = ogpInfo ? Object.assign(defaultOgpInfo, ogpInfo) : defaultOgpInfo;
    const ogpTags = Object.keys(ogpInfo).map((key) => (
        <meta property={`og:${key}`} content={ogpInfo[key]} key={`og_${key}`} />
    ));

    // This is special version, normally the icon is faHome
    let homeBtn = (
        <Link to="/" className="bg-white text-black p-2 border-white border rounded" title="Stay home, Save lives!">
            <span className="sr-only">Go to Top Page / トップページへ戻る</span>
            <FontAwesomeIcon icon={faHouseUser} />
        </Link>
    );
    if (hideHomeBtn) {
        // This is special version, normally hidden using React.Fragment
        homeBtn = (
            <div title="Stay home, Save lives!" className="p-2 border-white border rounded">
                <FontAwesomeIcon icon={faHouseUser} />
            </div>
        );
    }
    let fullTitle = title;
    if (pageTitle) {
        fullTitle = `${pageTitle} - ${title}`;
    }
    return (
        <div className="container mx-auto">
            <Helmet title={fullTitle}>
                <link rel="shortcut icon" type="image/png" href={image} />
                {ogpTags}
            </Helmet>
            <header className="flex flex-row items-center py-4 mb-4 text-white">
                <h1 className="text-xl font-bold flex-grow">{title}</h1>
                <div className="mx-2 text-2xl justify-end">
                    {homeBtn}
                </div>
            </header>
            <div>
                {children}
            </div>
            <div className="mx-2 md:mx-0">
                <address>
                    <span>Copyright (C) Kuropen.</span>
                </address>
            </div>
        </div>
    );
};

const query = graphql`
    query HeaderQuery {
        site {
            siteMetadata {
                title
                image
                url
            }
        }
    }
`;