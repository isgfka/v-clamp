module.exports = {
  pages: {
    index: {
      entry: './example/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'demo',
  chainWebpack: config => {
  }
};
