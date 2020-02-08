require("dotenv").config({  
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {  
  siteMetadata: {
    title: "Salt and Paper",
    description: "J'écis à l'encre de sel.",
    author: "Maxime Blanc",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL
        ? "https://thawing-river-44238.herokuapp.com"
        : "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "category",
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "saltandpaper",
        short_name: "salty",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-offline",
  ],
}