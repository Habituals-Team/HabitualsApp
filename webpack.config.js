const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = env => {
  return {
    entry: "./src/index.js",
    mode: "development",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    devServer: {
      publicPath: "/",
      port: 8080,
      proxy: {
        "/": {
          target: "http://localhost:3000",
          secure: false
        },
        contentBase: path.join(__dirname, "build")
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.join(__dirname, "./public/index.html"),
        filename: "index.html"
      })
    ]
  };
};
