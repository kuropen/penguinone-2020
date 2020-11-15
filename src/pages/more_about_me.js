import React from "react";
import Layout from "../components/layout";
import IconBox from "../components/iconbox";
import {graphql} from "gatsby";
import { RichText } from 'prismic-reactjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default ({data}) => {
    const doc = data.prismic.allAbout_mes.edges.slice(0, 1).pop();
    if (!doc) {
        return null;
    }
    const {text} = doc.node;
    return (
        <Layout pageTitle="Detailed Profile">
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
