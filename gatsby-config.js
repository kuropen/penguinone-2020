/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'penguinone', // (REQUIRED, replace with your own)
        pages: [ // (optional, builds pages dynamically)
          { 
            type: 'Blog',         // TypeName from prismic
            match: '/blog/:uid',   // Pages will be generated under this pattern
            path: '/blog/new',    // Placeholder page for unpublished documents
            component: require.resolve('./src/templates/prismic-blog.js'),
          }
        ],
        previews: false,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'penguinone-kuropen-org',
          protocol: 'https',
          hostname: 'penguinone.kuropen.org',
          region: 'ap-northeast-1',
      },
    },
  ],
  siteMetadata: {
    title: "Penguinone",
    titleTemplate: "%s - Penguinone",
    url: "https://penguinone.kuropen.org",
    image: "/siteImages/penguin.png",
  },
}
