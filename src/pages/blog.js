import React from "react";
import Layout from "../components/layout";
import BlogArticleList from "../components/blog/blogArticleList";

export default () => {
    return (
        <Layout pageTitle="Blog">
            <h2 className="p-4 bg-purple-200 text-black border-purple-200 rounded border text-xl">Blog: ブログ記事</h2>
            <div className="mb-4 p-4 border-purple-200 rounded border">
                <BlogArticleList />
            </div>
        </Layout>
    );
};
