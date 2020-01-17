module.exports = {
  siteMetadata: {
    title: `Liam Novak`,
    description: "Adventure photography by Liam Novak.",
    author: `@jaksik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Liam-Novak-Photography`,
        short_name: `liamnovak`,
        start_url: `/`,
        background_color: `#181510`,
        theme_color: `#e9dbbd;`,
        display: `minimal-ui`,
        icon: `src/images/app.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
