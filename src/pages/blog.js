import React from "react";
import Layout from "../components/layout";
import BlogArticleList from "../components/blog/blogArticleList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Iconbox from "../components/iconbox";
import CreativeCommons from "../components/cc/creativeCommons";

export default () => {
    return (
        <Layout pageTitle="Blog">
          <Iconbox className="kpBlogIndexBorder" icon={<FontAwesomeIcon icon={faBook}/>}>
            <h2 className="text-xl text-bold font-orbitron">Blog Articles</h2>
            <BlogArticleList />
          </Iconbox>
          <CreativeCommons />
        </Layout>
    );
};
