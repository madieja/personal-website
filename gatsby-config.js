const siteMetadata = require("./config/site-data.json");

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: siteMetadata.theme_color,
        showSpinner: false,
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-polyfill-io`,
	{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-154446374-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.name,
        short_name: siteMetadata.shortName,
        start_url: siteMetadata.prefix,
        background_color: siteMetadata.background_color,
        theme_color: siteMetadata.theme_color,
        display: siteMetadata.display,
        icon: siteMetadata.icon,
        include_favicon: false
      }
    },
    `gatsby-plugin-offline`
  ]
};
