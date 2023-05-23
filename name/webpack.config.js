const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/main.ts", // Update entry file extension to .ts
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/, // Add rule for TypeScript files
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // Add more rules for other file types (e.g., CSS, images, etc.)
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".vue"], // Add .ts extension
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [
    new VueLoaderPlugin(), // Add VueLoaderPlugin for Vue.js support
  ],
};
