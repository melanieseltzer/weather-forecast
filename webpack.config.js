const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? { 
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          } : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ]
};
