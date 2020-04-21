import React from "react";
import Layout from "../components/layout";
import SNSListBox from "../components/top/snsListBox";
import {graphql} from "gatsby";
import { RichText } from 'prismic-reactjs';

export default ({data}) => {
    const doc = data.prismic.allSocial_policys.edges.slice(0, 1).pop();
    if (!doc) {
        return null;
    }
    const {policy} = doc.node;
    const socialAccounts = data.prismic.allSocial_accountss.edges;
    return (
        <Layout pageTitle="Social Network Policy">
            <h2 className="p-4 bg-indigo-200 text-black border-indigo-200 rounded border text-xl">SNSポリシー</h2>
            <div className="p-4 border-indigo-200 rounded border">
                {RichText.render(policy)}
            </div>
            <div className="mb-4 p-4 border-indigo-200 rounded border">
                <h3 className="font-bold">Kuropenが保有するSNSアカウント</h3>
                <SNSListBox accounts={socialAccounts} />
            </div>
        </Layout>
    );
};

export const query = graphql`
  query SocialPolicyQuery {
    prismic {
      allSocial_policys {
        edges {
          node {
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
