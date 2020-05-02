import React from "react";
import Layout from "../components/layout";
import SNSListBox from "../components/top/snsListBox";
import {graphql, Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPencilRuler, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

export default ({data}) => {
    const socialAccounts = data.prismic.allSocial_accountss.edges;
    return (
        <Layout hideHomeBtn={true}>
          <p className="text-yellow-400 text-center md:w-2/3 mx-2 md:mx-auto font-serif text-xl mb-4 social-distance">
            STAY HOME! KEEP DISTANCE!<br />
            And <a href="https://akabe.co/" target="_blank" rel="noopener noreferrer">Gain the Power from Akabeko!</a>
          </p>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-24 mx-2">
                <section className="mb-8">
                    <h2 className="text-2xl border-b-8 border-teal-200 bg-teal-200 text-gray-900 pl-1">
                        <FontAwesomeIcon icon={faInfoCircle} /> About
                    </h2>
                    <ul className="border-l-8 border-teal-200 pl-2 TopPageMenu">
                        <li className="py-2"><Link to="/about/en">About this website</Link></li>
                        <li className="py-2"><Link to="/profile">Profile</Link></li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl border-b-8 border-purple-200 bg-purple-200 text-gray-900 pl-1">
                        <FontAwesomeIcon icon={faPencilRuler} /> Works
                    </h2>
                    <ul className="border-l-8 border-purple-200 pl-2 TopPageMenu">
                        <li className="py-2"><Link to="/blog">Blog</Link></li>
                        <li className="py-2"><Link to="/tech">Tech Articles</Link></li>
                        <li className="py-2"><a href="https://akabe.co/" target="_blank" rel="noopener noreferrer">Gain the Power from Akabeko</a></li>
                        <li className="py-2"><a href="https://github.com/kuropen" target="_blank" rel="noopener noreferrer">Codes on GitHub</a></li>
                        <li className="py-2">Note: Blog and Tech Articles are in Japanese</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl border-b-8 border-indigo-200 bg-indigo-200 text-gray-900 pl-1">
                        <FontAwesomeIcon icon={faCommentAlt} /> Social
                    </h2>
                    <SNSListBox
                      className="border-l-8 border-indigo-200 pl-2 TopPageMenu"
                      elementClassName="py-2"
                      socialPolicyLink={true}
                      accounts={socialAccounts} />
                </section>
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