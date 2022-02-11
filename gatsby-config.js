module.exports = {
  siteMetadata: {
    title: `namkheunMock`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-emotion", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "namkheun"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        query: `
          query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
              nodes {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                }
              }
            }
          }`,
        ref: 'slug',
        index: ['title', 'excerpt'],
        store: ['title', 'excerpt', 'date', 'slug'],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            title: node.frontmatter.title,
            excerpt: node.excerpt,
            date: node.frontmatter.date,
            slug: node.fields.slug,
          })),
      }
    }]
};