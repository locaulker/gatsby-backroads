module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description: "Explore Awesome WorldWide tours and discover what maes each one unique. Forget your daily routine and say 'Yes' to adventure.",
    author: "@locaulker",
    data: {
      name: 'John',
      age: 24
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
