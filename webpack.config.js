const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './client/index.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/', // set to listing/id/reviews?
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './public',
    hot: true,
    port: 6299,
  },
};
