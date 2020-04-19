import React from "react";
import {Link} from "gatsby";

export default ({articles, className}) => {
    const listElements = articles.map((article) => {
        const absolutePath = article.fileAbsolutePath;
        const pathMatch = absolutePath.match(/md-pages\/(.*)\.md$/);
        if (pathMatch == null) {
            return;
        }
        const pagePath = pathMatch[1];
        const category = pagePath.split('/').shift();
        if (category !== 'tech') {
            return null;
        }
        return (
            <li><Link to={`/${pagePath}`}>{article.frontmatter.title}</Link></li>
        );
    });
    return (
        <ul className={className}>
            {listElements}
        </ul>
    );
};
