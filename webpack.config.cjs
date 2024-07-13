const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const Dotenv = require('dotenv-webpack');

/**
 * Load JS and JSX files through Babel
 */

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'style/bundle.css',
});

const babelLoader = {
    
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env',
                ['@babel/preset-react', {'runtime': 'automatic'}]]
            }
          }
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            exclude: /node_modules/,
        },
        {
            test: /\.(png|jpg)$/,
            loader: "url-loader",
            exclude: /node_modules/
        }


      ]
};


const resolve = {
      extensions: ['.js', '.jsx']
};


const serverConfig = {
      target: 'node',
      mode: 'production',
      entry: './server/server.jsx',
      output: {
        path: path.join(__dirname, '/dist'),
        filename: 'server.cjs',
      },
      module: babelLoader,

      plugins: [
        new webpack.EnvironmentPlugin({
          PORT: 3001
        }),
        miniCssExtractPlugin,
        require('tailwindcss'),
        new Dotenv(),
      ],
      resolve
};


const clientConfig = {
  target: 'web',
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
     /*
      * Appends /static to index.html when looking for client.js
      * This is where Express is serving static files from
      */
    publicPath: '/static',
    filename: 'client.js',
  },
  module: babelLoader,

  plugins: [
    new htmlWebpackPlugin({
      template: `${__dirname}/src/index.html`
    }),
    miniCssExtractPlugin,
    require('tailwindcss'),
    new Dotenv(),
  ],
  resolve
};

module.exports = [serverConfig, clientConfig];
