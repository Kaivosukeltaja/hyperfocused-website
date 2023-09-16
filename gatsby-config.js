/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Hyperfocus Oy`,
    siteUrl: `https://www.hyperfocused.fi`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon-dot.svg"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "hyperfocused-website"
    },
  }, {
    resolve: 'gatsby-plugin-matomo',
    options: {
      siteId: '1',
      matomoUrl: 'https://hyperfocused.matomo.cloud/',
      siteUrl: 'https://www.hyperfocused.fi'
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /\.inline\.svg$/
      }
    }
  }]
};