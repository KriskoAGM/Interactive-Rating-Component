const path = require('path');

module.exports = {
  // ... other webpack configuration options ...
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    alias: {
      // Alias for the 'src' directory, to make importing easier
      '@': path.resolve(__dirname, 'src'),
    },
  },
};