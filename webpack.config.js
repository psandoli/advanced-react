const path = require("path")

const config = {
  mode: "development",
  resolve: {
    modules: [path.resolve("./lib"), path.resolve("./node_modules")],
  },
  entry: {
    vendor: [
      "babel-polyfill",
      "react",
      "react-dom",
      "prop-types",
      "axios",
      "lodash.debounce",
      "lodash.pickby",
    ],
    app: ["./lib/renderers/dom.js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }],
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
}

module.exports = config
