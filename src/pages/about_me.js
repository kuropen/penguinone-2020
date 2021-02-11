import React from "react";
import Layout from "../components/layout";
import IconBox from "../components/iconbox";
import {graphql, Link} from "gatsby";
import { RichText } from 'prismic-reactjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAddressCard,
  faUserCircle,
  faIdCardAlt,
  faMapMarkedAlt,
  faUniversity,
  faCommentAlt,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import PenguinImage from "../images/penguin.png";

export default ({data}) => {
    const doc = data.prismic.allAbout_mes.edges.slice(0, 1).pop();
    if (!doc) {
        return null;
    }
    const {text} = doc.node;
    return (
        <Layout pageTitle="Profile">
          <IconBox className="border-indigo-800" icon={<img src={PenguinImage} className="h-10 md:h-16 rounded-full" alt="" />} spNoIcon={true}>
            <div className="divide-y divide-gray-400">
              <div className="pb-2">
                <h2 className="text-xl font-orbitron">Who is Kuropen?</h2>
              </div>
              <div className="pt-2 pb-2">
                <dl>
                  <dt className="md:float-left font-bold mr-2"><FontAwesomeIcon icon={faUserCircle} /> ハンドルネーム</dt>
                  <dd>Kuropen</dd>
                  <dt className="clear-left md:float-left font-bold mr-2"><FontAwesomeIcon icon={faIdCardAlt} /> 職業</dt>
                  <dd>Web開発者（PHP, JavaScript担当）</dd>
                  <dt className="clear-left md:float-left font-bold mr-2"><FontAwesomeIcon icon={faMapMarkedAlt} /> 主な拠点</dt>
                  <dd>
                    埼玉県さいたま市中央区（与野本町・北与野）、福島県会津若松市
                  </dd>
                  <dt className="md:float-left font-bold mr-2"><FontAwesomeIcon icon={faUniversity} /> 出身校</dt>
                  <dd>会津大学コンピュータ理工学部</dd>
                  <div className="md:hidden">
                    {/* SNS accounts: not shown on PCs and tablets because they always have accounts list shown on the left */}
                    <dt className="md:float-left font-bold mr-2"><FontAwesomeIcon icon={faTwitterSquare} /> Twitter</dt>
                    <dd><a href="https://twitter.com/kuropen_aizu" target="_blank" rel="noopener noreferrer">kuropen_aizu</a></dd>
                    <dt className="md:float-left font-bold mr-2"><FontAwesomeIcon icon={faFacebookSquare} /> Facebook</dt>
                    <dd><a href="https://facebook.com/yuda.hirochika" target="_blank" rel="noopener noreferrer">Facebookアカウントはこちら</a></dd>
                    <dt className="md:float-left font-bold mr-2"><FontAwesomeIcon icon={faInstagramSquare} /> Instagram</dt>
                    <dd><a href="https://instagram.com/kuropen" target="_blank" rel="noopener noreferrer">faInstagramSquare</a></dd>
                    <dt className="md:float-left font-bold mr-2"><FontAwesomeIcon icon={faCommentAlt} /> ActivityPub</dt>
                    <dd><a href="https://kuropen.me/@krpn" target="_blank" rel="noopener noreferrer">@krpn@kuropen.me</a><br />
                    <Link to="/activitypub">ActivityPubの詳細</Link></dd>
                    <dt className="md:float-left font-bold mr-2"><FontAwesomeIcon icon={faExclamationCircle} /> SNSポリシー</dt>
                    <dd><Link to="/social">こちらをご確認ください</Link></dd>
                  </div>
                </dl>
              </div>
            </div>
          </IconBox>
          <IconBox className="border-indigo-800" icon={<FontAwesomeIcon icon={faAddressCard} />} spNoIcon={true}>
            <div className="divide-y divide-gray-400">
              <div className="pb-2">
                <h2 className="text-xl font-orbitron">Detailed Profile</h2>
              </div>
              <div className="pt-2 pb-2 blogArticle">
                {RichText.render(text)}
              </div>
            </div>
          </IconBox>
        </Layout>
    );
};

export const query = graphql`
  query MoreAboutMeQuery {
    prismic {
      allAbout_mes {
        edges {
          node {
            text
          }
        }
      }
    }
  }  
`;
