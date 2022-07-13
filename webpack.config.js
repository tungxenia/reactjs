const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Set link export file
const LINK  = `style/`;

const config = {
  entry: {
    main: [`./${LINK}js/main.ts`, `./${LINK}scss/main.scss`],
    app: [`./${LINK}js/app.ts`, `./${LINK}scss/app.scss`]
  },
  output: {
    filename: "js/[name].js",
    chunkFilename: "js/[name].js",
    path: path.resolve(__dirname, 'src', 'assets'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].css"
    }),
  ],
  module: {
    rules: [
      {
        use: 'babel-loader',
        exclude: /node_modules/,
        test: /\.([tj]sx?|mjs)$/,
      },
      {
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
        test: /\.s?css$/
       },
    ]
  },
};

module.exports = config;