const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === 'MarkdownRemark') {
        console.log(createFilePath({node, getNode}));
        actions.createNodeField({node});
    }
};

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const result = await graphql(`
      query CreatePagesQuery {
        allMarkdownRemark {
          nodes {
            id
            fileAbsolutePath
          }
        }
      }
    `);
    result.data.allMarkdownRemark.nodes.forEach((node) => {
        const absolutePath = node.fileAbsolutePath;
        const pathMatch = absolutePath.match(/md-pages\/(.*)\.md$/);
        if (pathMatch == null) {
            return;
        }
        const pagePath = pathMatch[1];
        console.log(`Generating page: ${pagePath}`);
        const category = pagePath.split('/').shift();
        let template = './src/templates/md-default.js';
        if (category === 'tech') {
            template = './src/templates/md-tech.js';
        }
        createPage({
            path: `/${pagePath}`,
            component: path.resolve(template),
            context: {
                id: node.id,
            }
        });
    });
};
