import React from "react";
import { Helmet } from "react-helmet";
import {useStaticQuery, graphql, Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faHammer } from '@fortawesome/free-solid-svg-icons';
import Iconbox from "../components/iconbox";

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
            <header className="bg-black text-gray-200 flex flex-row items-center py-4 kp-gradientBorder1">
                <h1 className="font-orbitron text-2xl flex-grow ml-2">{title}</h1>
                <div className="mx-2 text-2xl justify-end">
                    {homeBtn}
                </div>
            </header>
            <div className="divide-y divide-gray-400 p-4 border border-black rounded-b-lg">
                <div>
                  <Iconbox className="border-red-500" icon={<FontAwesomeIcon icon={faHammer} />}>
                    <h2 className="text-xl text-bold font-orbitron">Under Construction</h2>
                    <p>現在<strong>ページレイアウトの大幅見直し</strong>を行っており、<strong>途中経過</strong>が公開されています。<br/>
                      レイアウトが崩れている箇所が一部ある場合がありますが、ご了承ください。</p>
                  </Iconbox>
                  {children}
                </div>
                <div className="mx-2 pt-2">
                  <address>
                    <span>Copyright (C) Kuropen.</span>
                  </address>
                </div>
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