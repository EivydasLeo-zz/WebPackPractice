const path = require('path'); // node modulis dirbti su keliais iki failu
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html generavimo pluginas
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    // kuri faila paims webpack kaip pagrindini
    main: path.resolve(__dirname, './src/app.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[hash][ext]',
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),

    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['mozjpeg', { quality: 50 }],
          ['pngquant', { quality: [0.5, 0.7] }],
          ['svgo'],
        ],
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/html/template.html',
      templateParameters: {
        title: 'Pakeiciau title per dev.js',
        mainTitle: 'Pakeiciau main Title per dev.js',
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
