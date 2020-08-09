import React, { useState } from "react"
import Layout from "../components/layout";
import SNSListBox from "../components/top/snsListBox";
import StopTheSpread from "../components/top/stopTheSpread";
import BlogArticleList from "../components/blog/blogArticleList";
import TechArticleList from "../components/tech/techArticleList";
import Iconbox from "../components/iconbox";
import {graphql, Link} from "gatsby";
import BekoImage from "../images/beko.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faIdCard,
  faIdCardAlt,
  faMapMarkedAlt,
  faWindowClose,
  faBirthdayCake,
  faUniversity,
  faCommentAlt,
  faBook,
  faJournalWhills,
} from "@fortawesome/free-solid-svg-icons";
import mapParameters from "../components/top/mapParameters";
// import AboutLanguageList from "../components/about/aboutLanguageList"

const classNames = require('classnames');

export default ({data}) => {
    const socialAccounts = data.prismic.allSocial_accountss.edges;
    const [mapView, setMapView] = useState('');
    const currentMapParameter = mapView === '' ? mapParameters["Default"] : mapParameters[mapView];
    const techArticles = data.allMarkdownRemark.nodes;
    return (
        <Layout hideHomeBtn={true}>
          <StopTheSpread />

          <Iconbox className="border-indigo-800"
            icon={
            <img src="/siteImages/penguin.png" className={
              classNames("h-16 rounded-full min-w-full", (mapView !== '' ? 'hidden md:block' : ''))
            } alt="" />
            }>
            <h2 className="text-xl text-bold font-orbitron">Who is Kuropen?</h2>
            <dl>
              <dt className="md:float-left font-bold mr-2"><FontAwesomeIcon icon={faUserCircle} /> Name</dt>
              <dd>Kuropen</dd>
              <dt className="clear-left md:float-left font-bold mr-2"><FontAwesomeIcon icon={faBirthdayCake} /> Date of Birth</dt>
              <dd>August 3, 1989</dd>
              <dt className="clear-left md:float-left font-bold mr-2"><FontAwesomeIcon icon={faIdCardAlt} /> Occupation</dt>
              <dd>Web Developer</dd>
              <dt className="clear-left md:float-left font-bold mr-2"><FontAwesomeIcon icon={faMapMarkedAlt} /> Location</dt>
              <dd>
                <button className="underline" onClick={() => setMapView('Yono')}>Yono</button> &amp; <button className="underline" onClick={() => setMapView('Aizu')}>Aizuwakamatsu</button>
              </dd>
            </dl>
            <div className={classNames("clear-left border rounded shadow-lg m-1 p-2", (mapView === '' ? 'hidden' : ''))}>
              <div className="float-right">
                <button className="text-2xl" onClick={() => setMapView('')}>
                  <FontAwesomeIcon icon={faWindowClose} />
                </button>
              </div>
              <h3 className="text-lg text-bold font-orbitron">Where is {currentMapParameter.label}?</h3>
              <p>{currentMapParameter.description}</p>
              <iframe width="100%" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                      src={currentMapParameter.embedMapUrl} />
              <small><a href={currentMapParameter.largeMapUrl}>大きな地図を表示</a></small>
            </div>
            <dl>
              <dt className="md:float-left font-bold mr-2"><FontAwesomeIcon icon={faUniversity} /> Alma mater</dt>
              <dd>The University of Aizu</dd>
              <dt className="clear-left md:float-left font-bold mr-2"><FontAwesomeIcon icon={faIdCard} /> License</dt>
              <dd>基本情報技術者・準中型(5t限定)運転免許・4級アマチュア無線技士</dd>
              <dt className="clear-left md:float-left font-bold mr-2"><FontAwesomeIcon icon={faCommentAlt} /> Social Network</dt>
              <dd>
                <div>※<Link to="/social">SNSポリシー</Link></div>
                <SNSListBox
                  elementClassName="md:ml-2"
                  accounts={socialAccounts}
                />
              </dd>
            </dl>
          </Iconbox>

          <Iconbox className="border-indigo-800" icon={<FontAwesomeIcon icon={faBook}/>}>
            <h2 className="text-xl text-bold font-orbitron">Recent Blog Articles</h2>
            <BlogArticleList max="3" />
            <p><Link to="/blog">Read More</Link></p>
          </Iconbox>

          <Iconbox className="border-indigo-800" icon={<FontAwesomeIcon icon={faJournalWhills}/>}>
            <h2 className="text-xl text-bold font-orbitron">Selected Tech Articles</h2>
            <TechArticleList articles={techArticles} />
            <p><Link to="/tech">Read More</Link></p>
          </Iconbox>

          <Iconbox className="border-red-700" icon={<img src={BekoImage} className="h-16 rounded-full" alt="" />}>
            <h2 className="text-xl text-bold font-orbitron">Gain the Power from Akabeko</h2>
            <p>
              アマビエもいいけど赤べこも。
              福島県会津地方に伝わる神聖な赤い牛を模した張り子人形・「赤べこ」は、
              天然痘の感染から子供を守ったという言い伝えがあるなど、感染防止のお守りとしても知られています。<br/>
              <a href="https://akabe.co/" target="_blank" rel="noopener noreferrer">
                赤べこからパワーを
              </a>
            </p>
          </Iconbox>

          {/*<div className="md:grid md:grid-cols-2 mb-5">*/}
          {/*  <div*/}
          {/*    className="p-4 border-indigo-800 rounded border md:flex md:flex-row">*/}
          {/*    <div className="md:w-1/3">*/}
          {/*      <div className="flex flex-row md:flex-none md:block items-center">*/}
          {/*        <div><img src="/siteImages/penguin.png" className="h-12 rounded-full" alt="" /></div>*/}
          {/*        <div className="text-xl ml-2 md:ml-0">Kuropen</div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="md:w-2/3">*/}
          {/*      <ul className="TopPageMenu text-lg">*/}
          {/*        <li><Link to="/profile">Profile</Link></li>*/}
          {/*        <li><Link to="/blog">Blog</Link></li>*/}
          {/*        <li><Link to="/tech">Tech Articles</Link></li>*/}
          {/*      </ul>*/}
          {/*      <SNSListBox*/}
          {/*        className="TopPageMenu text-lg"*/}
          {/*        elementClassName=""*/}
          {/*        socialPolicyLink={true}*/}
          {/*        accounts={socialAccounts} />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className="p-4 border-indigo-800 rounded border md:flex md:flex-row">*/}
          {/*    <div className="md:w-1/3">*/}
          {/*      <div className="flex flex-row md:flex-none md:block items-center">*/}
          {/*        <div><img src={BekoImage} className="h-12 rounded-full" alt="" /></div>*/}
          {/*        <div className="text-xl ml-2 md:ml-0">Aka Beko</div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="md:w-2/3">*/}
          {/*      <ul className="TopPageMenu text-lg">*/}
          {/*        <li>*/}
          {/*          アマビエもいいけど赤べこも。福島県会津地方に伝わる神聖な赤い牛を模した張り子人形・「赤べこ」は、*/}
          {/*          天然痘の感染から子供を守ったという言い伝えがあるなど、感染防止のお守りとしても知られています。*/}
          {/*        </li>*/}
          {/*        <li><a href="https://akabe.co/" target="_blank" rel="noopener noreferrer">*/}
          {/*          赤べこからパワーを*/}
          {/*        </a></li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </Layout>
    );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 3, filter: {fileAbsolutePath: {regex: "/tech/"}}) {
      nodes {
        id
        frontmatter {
          title
        }
        fileAbsolutePath
      }
    }
    prismic {
      allSocial_accountss {
        edges {
          node {
            account_type
            account_name
            account_link {
              _linkType
              ... on PRISMIC__ExternalLink {
                url
              }
            }
          }
        }
      }
    }
  }  
`;