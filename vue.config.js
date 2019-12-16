const path = require('path')

module.exports = {
  // publicPath: {Type: string, Default: '/'};
  publicPath: process.env.NODE_ENV === 'production'? '/production-sub-path/': '/',

  // outputDir: {Type: string, Default: 'dist'}(当运行 vue-cli-service build 时生成的生产环境构建文件的目录。);
  // outputDir: 'dist',

  // assetsDir: {Type: string, Default: 'assets'}(放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录);
  assetsDir: 'assets',

  // indexPath: {Type: string, Default: 'index.html'};

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
      title: 'Index Page',
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
        // 为生产环境修改配置... production
    } else {
        // 为开发环境修改配置... development
    }
  },
  
  // image-url url(./image.png) 会被翻译为 require('./image.png'); file-loader 用版本哈希值和正确的公共基础路径来决定最终的文件路径，再用 url-loader 将小于 4kb 的资源内联，以减少 HTTP 请求的数量。
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //       .use('url-loader')
  //         .loader('url-loader')
  //         .tap(options => Object.assign(options, { limit: 10240 }))
  // },

  // webpack-dev-server 相关配置
  devServer: { // 设置代理
    host: '0.0.0.0', //ip地址
    port: 8080, //端口
    https: false, //false关闭https，true为开启
    hot: true, //热加载
    open: true, //自动打开浏览器
    proxy: {
      '/api': { //本地                                        
        // target: 'http://192.168.102.13:8080/',
        target: 'http://localhost:8081/', // <url>
        // 如果要代理 websockets
        ws: true,
        changeOrigin: true
      },
      '/test': { //测试
        target: 'http://172.0.0.0:8082/', // <other_url>
      },
      '/pre-release': {  //预发布
        target: 'http://XXX.com/'
      },
      '/production': { //正式
        target: 'http://XXX.com/'
      }
    }
  },
  pluginOptions: { // 第三方插件配置 
    // (https://github.com/yenshih/style-resources-loader)
    // 'style-resources-loader': {
		// 	preProcessor: 'scss', //声明类型
		// }
  },

}