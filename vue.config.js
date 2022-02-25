const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

	productionSourceMap: false,

  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
		// config.resolve.alias
      //  .set("vue$",'vue/dist/vue.js');
		// config.devtool = "source-map"
		// config.devtool = 'cheap-source-map'
    // config.module
    //   .rule('js')
    //   .include.add(path.resolve(__dirname, 'package')).end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
    //     // 修改它的选项
    //     return options;
    //   });
  },
	configureWebpack: (config) => {
		// configureWebpack: config => {
			// config.resolve = {
			// 	 extensions: ['.js', '.vue', '.json',".css"],
			// 		alias: {
			// 			'vue$': 'vue/dist/vue.esm.js',
			// 			// '@': resolve('src'),
			// 		}
			// }
	// },
		config.devtool = 'cheap-source-map'
	}
};
