import React from "react";
import Layout from "../components/layout";
import SNSListBox from "../components/top/snsListBox";
import {graphql, Link} from "gatsby";
import BekoImage from "../images/beko.png";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfoCircle, faPencilRuler, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
// import AboutLanguageList from "../components/about/aboutLanguageList"

export default ({data}) => {
    const socialAccounts = data.prismic.allSocial_accountss.edges;
    return (
        <Layout hideHomeBtn={true}>
          <p className="text-yellow-400 text-center md:w-2/3 mx-2 md:mx-auto font-serif text-xl mb-4">
            感染防止対策は自己責任ではない。守られなければならない人がいる。<br />
            全ての人を守るために、<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000121431_newlifestyle.html" target="_blank" rel="noopener noreferrer">新しい生活様式</a>。
          </p>

          <div className="md:grid md:grid-cols-2 mb-5">
            <div
              className="p-4 border-indigo-800 rounded border md:flex md:flex-row">
              <div className="md:w-1/3">
                <div className="flex flex-row md:flex-none md:block items-center">
                  <div><img src="/siteImages/penguin.png" className="h-12 rounded-full" alt="" /></div>
                  <div className="text-xl ml-2 md:ml-0">Kuropen</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <ul className="TopPageMenu text-lg">
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/tech">Tech Articles</Link></li>
                </ul>
                <SNSListBox
                  className="TopPageMenu text-lg"
                  elementClassName=""
                  socialPolicyLink={true}
                  accounts={socialAccounts} />
              </div>
            </div>
            <div
              className="p-4 border-indigo-800 rounded border md:flex md:flex-row">
              <div className="md:w-1/3">
                <div className="flex flex-row md:flex-none md:block items-center">
                  <div><img src={BekoImage} className="h-12 rounded-full" alt="" /></div>
                  <div className="text-xl ml-2 md:ml-0">Aka Beko</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <ul className="TopPageMenu text-lg">
                  <li>
                    アマビエもいいけど赤べこも。福島県会津地方に伝わる神聖な赤い牛を模した張り子人形・「赤べこ」は、
                    天然痘の感染から子供を守ったという言い伝えがあるなど、感染防止のお守りとしても知られています。
                  </li>
                  <li><a href="https://akabe.co/" target="_blank" rel="noopener noreferrer">
                    赤べこからパワーを
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </Layout>
    );
};

export const query = graphql`
  query SNSAccountQuery {
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