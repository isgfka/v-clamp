const path = require('path');
function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  pages: {
    index: {
      entry: './example/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'demo',
  chainWebpack: config => {
    // config.resolve.alias
    //   .set('@', resolve('src'))
    //   .set('assets', resolve('src/assets'))
    //   .set('components', resolve('src/components'))
    //   .set('layout', resolve('src/layout'))
    //   .set('base', resolve('src/base'))
    //   .set('static', resolve('src/static'));
  }
};
