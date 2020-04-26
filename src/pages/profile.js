import React from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import { RichText } from 'prismic-reactjs';

export default ({data}) => {
    const doc = data.prismic.allAbout_mes.edges.slice(0, 1).pop();
    if (!doc) {
        return null;
    }
    const {text} = doc.node;
    return (
        <Layout pageTitle="Profile">
            <h2 className="p-4 bg-teal-200 text-black border-teal-200 rounded border text-xl">Profile</h2>
            <div className="mb-4 p-4 border-teal-200 rounded border">
            {RichText.render(text)}
            </div>
        </Layout>
    );
};

export const query = graphql`
  query ProfileQuery {
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
