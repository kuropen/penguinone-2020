import React from "react";
import Layout from "../components/layout";
import BlogArticleList from "../components/blog/blogArticleList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faJournalWhills } from "@fortawesome/free-solid-svg-icons";
import Iconbox from "../components/iconbox";
import CreativeCommons from "../components/cc/creativeCommons";
import NavLinkBox from "../components/navLinkBox";

export default () => {
    return (
        <Layout pageTitle="Blog">
          <div className="m-1 md:m-2">
            <NavLinkBox href="/tech" type="Link" icon={faJournalWhills} text="2018年以前の技術関連記事はこちら" />
          </div>
          <Iconbox className="kpBlogIndexBorder" icon={<FontAwesomeIcon icon={faBook}/>}>
            <h2 className="text-xl text-bold font-orbitron">Blog Articles</h2>
            <BlogArticleList />
          </Iconbox>
          <CreativeCommons />
        </Layout>
    );
};
