const path = require('path'); // node modulis dirbti su keliais iki failu
const HtmlWebpackPlugin = require('html-webpack-plugin'); //
const ESLintPlugin = require('eslint-webpack-plugin');

// webpack link plugin options
const lintOptions = {
  context: path.resolve(__dirname),
  fix: true,
};

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    // kuri faila paims webpack kaip pagrindini
    main: path.resolve(__dirname, './src/app.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[name][ext]',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i, // pritaikom .css failam
        use: ['style-loader', 'css-loader'], // uzkraunam css
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin(lintOptions),
    new HtmlWebpackPlugin({
      template: './src/html/template.html',
      templateParameters: {
        title: 'Pakeiciau title per dev.js',
        mainTitle: 'Pakeiciau main Title per dev.js',
      },
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
  ],
};
