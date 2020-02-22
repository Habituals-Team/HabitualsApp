const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
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
          options: { presets: ["@babel/env", "@babel/preset-react"] }
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
        contentBase: path.resolve(__dirname, "dist")
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        filename: "./index.html"
      })
    ]
  };
