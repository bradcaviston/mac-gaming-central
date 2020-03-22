require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Mac Gaming Central`,
    description: `News, reviews, and guides for all things Mac gaming.`,
    siteUrl: process.env.URL,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: process.env.WP_URL,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: true,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        auth: {
          wpcom_app_clientSecret: process.env.WP_CLIENT_SECRET,
          wpcom_app_clientId: process.env.WP_CLIENT_ID,
          wpcom_user: process.env.WP_USER,
          wpcom_pass: process.env.WP_PASSWORD,
        },
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_TRACKING_ID,
        anonymize: true
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
};
