module.exports = {
  siteMetadata: {
    title: 'People, Product and Travel Photography portfolio',
    description: 'This is where I share my pictures.',
    titleTemplate: '%s by Bogusz Strulak',
    url: 'http://boguszstrulak.com', // No trailing slash allowed!

  },

  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${ __dirname }/src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `typeface-oswald`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${ __dirname }/src/data/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-135842330-1',
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'www.boguszstrulak.com',
        protocol: 'http',
        hostname: 'www.boguszstrulak.com',
      },
    },
  ],
}
