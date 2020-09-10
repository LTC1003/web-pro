
module.exports = {
  // publicPath: {Type: string, Default: '/'};
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/production-sub-path/'
  // : '/',
  publicPath: process.env.NODE_ENV === 'production' ? './': '/',
  // outputDir: {Type: string, Default: 'dist'}(当运行 vue-cli-service build 时生成的生产环境构建文件的目录。);
  outputDir: 'dist',

  // assetsDir: {Type: string, Default: 'assets'}(放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录);
  assetsDir: '',

  indexPath: 'index.html',

  // filenameHashing: {Type: boolean, Default: true};
  filenameHashing: false,

  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效, lintOnSave: true; lintOnSave 是一个 truthy 的值时,开发和生产构都会被启用.在生产构建禁用
  // lintOnSave: process.env.NODE_ENV !== 'production',
  lintOnSave: false,

  // runtimeCompiler: {default:false}; 设置为 true 后你就可以在 Vue 组件中使用 template 选项了，这会让你的应用额外增加 10kb 左右.

  // productionSourceMap:{Default: true}; 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建;
  productionSourceMap: false,

  // pages: {Type: object, Default: undefined};
  pages: {
    index: {
      // page 的入口 0

      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'TooSee',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/main.js'
  },

  // 是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  // runtimeCompiler: true,  

  // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾  
  productionSourceMap: true,

  //可以在正式环境下关闭错误报告 console.log...
  configureWebpack: config => { 
    if (process.env.NODE_ENV === 'production') {
      config.mode = "production"
        // 为生产环境修改配置... production
    } else {
        // 为开发环境修改配置... development
        config.mode = "development"
    }
  },
  // webpack-dev-server 相关配置
  devServer: { // 本地
    host: '127.0.0.1', // 10.12.89.244   '127.0.0.1'
    port: 8080, //端口
    https: false, //false关闭https，true为开启
    hot: true, //热加载
    open: true, //自动打开浏览器
    proxy: { // 设置代理
      '/api': {                                      
        target: '10.12.89.103:8080',
      },
      '/test': {
        target: 'http://10.12.88.215:8080',
        ws: true, 
        changeOrigin: true
      }
    }
  },
  pluginOptions: { // 第三方插件配置 
    // (https://github.com/yenshih/style-resources-loader)
    // 'style-resources-loader': {
		// 	preProcessor: 'scss', //声明类型
		// }
  }
}
