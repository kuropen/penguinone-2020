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
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'penguinone', // (REQUIRED, replace with your own)
        pages: [ // (optional, builds pages dynamically)
          { 
            type: 'Blog',         // TypeName from prismic
            match: '/blog/:id',   // Pages will be generated under this pattern
            path: '/blog/new',    // Placeholder page for unpublished documents
            component: require.resolve('./src/templates/prismic-blog.js'),
          }
        ],
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
  ],
  siteMetadata: {
    title: "Penguinone",
    titleTemplate: "%s - Penguinone",
    url: "https://kuropen.org",
    image: "/siteImages/penguin.png",
    twitterUserName: "kuropen_aizu",
    fbUserName: "yuda.hirochika",
    activityPubUrl: "https://kuropen.me/@krpn",
  },
}
