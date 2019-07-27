/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const VueLoaderPlugin = require("vue-loader/lib/plugin")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
  })
}
