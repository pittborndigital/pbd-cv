module.exports = {
  siteMetadata: {
    title: 'CV - Christopher Pitt',
    lastUpdated: '2018-05-25',
  },
  pathPrefix: '/pbd-cv',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/favicon.svg',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    'gatsby-plugin-styled-components',
  ],
}
