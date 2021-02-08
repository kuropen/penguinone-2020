import React from "react";
import { Helmet } from "react-helmet";
import {StaticQuery, graphql, Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import NavLinkBox from "./navLinkBox";

export default ({ children, hideHomeBtn, pageTitle, ogpInfo }) => (
  <StaticQuery query={query} render={data => {
    const {site} = data;
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
      <Link to="/">
        <FontAwesomeIcon icon={faHouseUser} />
        <span className="text-sm"> Home</span>
      </Link>
    );
    if (hideHomeBtn) {
      homeBtn = (
        <React.Fragment />
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
        <header className="flex flex-row items-center pt-4 mx-2 2xl:mx-4">
          <h1 className="font-orbitron text-2xl flex-grow ml-2">{title}</h1>
          <div className="mx-2 text-2xl justify-end">
            {homeBtn}
          </div>
        </header>
        <div className="kp-main p-4 border border-black rounded mb-4 2xl:mx-4 kp-gradientBorder2 md:flex md:flex-row">
          <div className="m-4 md:flex-none hidden md:block">
            <div className="grid md:inline-grid md:grid-cols-1 md:grid-rows-none gap-1">
              <NavLinkBox href="https://twitter.com/kuropen_aizu" type="a" icon={faTwitterSquare} text="Twitter" />
              <NavLinkBox href="https://www.facebook.com/yuda.hirochika" type="a" icon={faFacebookSquare} text="Facebook" />
              <NavLinkBox href="https://instagram.com/kuropen" type="a" icon={faInstagramSquare} text="Instagram" />
              <NavLinkBox href="/social" type="Link" icon={faExclamationCircle} text="SNS Policy" />
            </div>
          </div>
          <div className="md:flex-1">
            {children}
          </div>
        </div>
        <div className="mx-2 mb-2 2xl:mx-4 md:flex md:flex-row">
          <address>
            <span>Copyright (C) Kuropen.</span>
          </address>
          <Link to="/about" className="underline md:ml-2">このサイトについて</Link>
        </div>
      </div>
    );
  }} />
);

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