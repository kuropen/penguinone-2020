import React from "react";
import { Helmet } from "react-helmet"
import {useStaticQuery, graphql, Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faCreativeCommons, faCreativeCommonsNc, faCreativeCommonsBy } from '@fortawesome/free-brands-svg-icons';

export default ({ children, hideHomeBtn, pageTitle }) => {
    const {site} = useStaticQuery(query);
    const {title, image} = site.siteMetadata;
    // This is special version, normally the icon is faHome
    let homeBtn = (
        <Link to="/" className="bg-white text-black p-2 border-white border rounded" title="Stay home, stay lives!">
            <FontAwesomeIcon icon={faHouseUser} />
        </Link>
    );
    if (hideHomeBtn) {
        // This is special version, normally hidden using React.Fragment
        homeBtn = (
            <div title="Stay home, stay lives!" className="p-2 border-white border rounded">
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
            <Helmet title={fullTitle} />
            <header className="flex flex-row items-center py-4 mb-4 text-white">
                <div className="mx-2">
                    <img src={image} className="h-12 w-12 rounded-full" alt="" />
                </div>
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
                    <span>Copyright (C) Kuropen.</span>&nbsp;
                    <span><a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">
                        Licensed under:&nbsp;
                        <span className="sr-only">Creative Commons Attribution-NonCommercial 4.0 License.</span>
                        <FontAwesomeIcon icon={faCreativeCommons} />
                        <FontAwesomeIcon icon={faCreativeCommonsBy} />
                        <FontAwesomeIcon icon={faCreativeCommonsNc} />
                    </a></span>
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
            }
        }
    }
`;