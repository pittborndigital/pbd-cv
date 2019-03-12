module.exports = {
  siteMetadata: {
    title: 'CV - Christopher Pitt',
    lastUpdated: '2019-03-12',
  },
  pathPrefix: '/pbd-cv',
  plugins: [
    'gatsby-plugin-react-helmet',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'md-data',
      },
    },
    'gatsby-transformer-remark',
  ],
}
