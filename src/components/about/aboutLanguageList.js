import React from "react";
import {Link} from "gatsby";

export default ({articles, className}) => {
    const listElements = articles.map((article) => {
        const absolutePath = article.fileAbsolutePath;
        const pathMatch = absolutePath.match(/md-pages\/(.*)\.md$/);
        if (pathMatch == null) {
            return null;
        }
        const pagePath = pathMatch[1];
        const category = pagePath.split('/').shift();
        if (category !== 'about') {
            return null;
        }
        return (
            <li key={article.id}><Link to={`/${pagePath}`}>{article.frontmatter.lang}</Link></li>
        );
    });
    return (
        <ul className={className}>
            {listElements}
        </ul>
    );
};
