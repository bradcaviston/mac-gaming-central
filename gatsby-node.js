/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            slug
            date
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `);

  result.data.allWordpressPost.edges.forEach(({ node }) => {
    const date = new Date(node.date);
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    createPage({
      path: `${date.getUTCFullYear()}/${month}/${day}/${node.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug
      }
    });
  });

  result.data.allWordpressCategory.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug
      }
    });
  });
};
