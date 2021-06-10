const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        public: path.resolve(__dirname, './public'),
      },
      extensions: ['.js', '.vue', '.json'],
    },
  },
};
