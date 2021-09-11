const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  module: {
    rules: [
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
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      }, {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name][hash][ext]',
        },
      },
    ],
  },
  plugins: [new ESLintPlugin({
    overrideConfigFile: path.resolve(__dirname, '.eslintrc.js'),
    context: path.resolve(__dirname, 'src'),
    files: '**/*.js',
  }),
  new HtmlWebpackPlugin({
    title: 'I like webpack',
    template: './src/template.html',
  }),
  ],
};
