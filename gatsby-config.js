module.exports = {
  siteMetadata: {
    title: `SpeedCopy Wynajem kserokopiarek`,
    description: `Wynajem kserokopiarek Piotrków Łódź. Serwis i naprawy w cenie.`,
    author: `@gatsbyjs`,
    siteUrl: `https://speedcopy.pl`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          `poppins\:300,800`
        ],
        display: 'swap',
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
