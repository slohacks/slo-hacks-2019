module.exports = {
  siteMetadata: {
    title: 'SLO Hacks',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
        omitGoogleFont: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'airbnb-browser-shims',
  ],
  polyfill: false,
};
