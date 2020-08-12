import React from "react";
import Layout from "../components/layout";
import SNSListBox from "../components/top/snsListBox";
import IconBox from "../components/iconbox";
import {graphql} from "gatsby";
import { RichText } from 'prismic-reactjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export default ({data}) => {
    const doc = data.prismic.allSocial_policys.edges.slice(0, 1).pop();
    if (!doc) {
        return null;
    }
    const {date, policy} = doc.node;
    const socialAccounts = data.prismic.allSocial_accountss.edges;
    return (
        <Layout pageTitle="Social Network Policy">
          <IconBox className="border-yellow-600" icon={<FontAwesomeIcon icon={faExclamationCircle} />} spNoIcon={true}>
            <div className="divide-y divide-gray-400">
              <div className="pb-2">
                <h2 className="text-xl font-orbitron">Social Network Policy</h2>
                <p>最終更新日: {date}</p>
              </div>
              <div className="pt-2 pb-2">
                {RichText.render(policy)}
              </div>
              <div className="pt-2">
                <h3 className="font-bold">Kuropenが保有するSNSアカウント</h3>
                <SNSListBox accounts={socialAccounts} />
              </div>
            </div>
          </IconBox>
        </Layout>
    );
};

export const query = graphql`
  query SocialPolicyQuery {
    prismic {
      allSocial_policys {
        edges {
          node {
            date
            policy
          }
        }
      }
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
