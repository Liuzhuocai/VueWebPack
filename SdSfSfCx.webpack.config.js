const webpackconfig = require('./webpack.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//模版文件
// const LAYOUT = './src/layout.html';
//打包的入口entry,相对于本文件路径,而且是要绝对路径

const files = [
    {file: '/main.js', chunks: ['S', 'L', 'P'/*, 'elementUI'*/], name: 'index', favicon: './res/favicon.ico'},
];
const entry = {};
const htmls = [];
let cacheGroups = {};
let plugins = [
    // new BundleAnalyzerPlugin()
];

let p = null, name = null;
for (var i of files) {
    i.file = __dirname + i.file;
    p = path.parse(i.file);
    i.name = i.name || p.name;
    entry[i.name] = i.file;
    //封装html页面
    var obj = {
        template: __dirname + '/layout.html',
        filename: i.name + '.html',
        chunks: i.chunks ? i.chunks.concat([i.name, 'runtime']) : [i.name, 'S', 'L', 'runtime', 'P', 'C'],
        minify: {
            collapseWhitespace: true,
            removeComments: true
        }
    }
    if (i.favicon) obj.favicon = i.favicon
    htmls.push(new HtmlWebpackPlugin(obj));

    // entryInfo.push(p);
}
cacheGroups = {//合并，外面的为分割
    elementUI: {
        test: /[\\/]node_modules[\\/](element-ui)/,
        priority: 12,
        name: 'elementUI',
        chunks: 'initial',
        minChunks: 1,
        reuseExistingChunk: true
    },
    //将常用的库打包到一起作为静态文件
    'static': {
        test: /[\\/]node_modules[\\/](vue|axios)/,
        priority: 10,
        name: 'S',
        chunks: 'initial',
        minChunks: 2,
        reuseExistingChunk: true
    },
    //将常用库的其他依赖包打包到另外的库里面
    libs: {
        test: /[\\/]node_modules[\\/]/,
        priority: 9,
        name: 'L',
        chunks: 'initial',
        minChunks: 2,
        reuseExistingChunk: true
    },
    'component': {
        test: /[\\/]src[\\/]{1,2}component[\\/]/,
        // test     :/\.vue$/,
        priority: 8,
        name: 'C',
        chunks: 'initial',
        minChunks: 2,
        enforce: true,
        // maxInitialRequests:1,
        // maxInitialRequests:1,
        reuseExistingChunk: true
    }
}
webpackconfig.entry = entry;
webpackconfig.optimization.splitChunks.cacheGroups = cacheGroups;
// webpackconfig.module.rules[2].include = [
//     path.resolve('./main.js'),
//     path.resolve('./mian.vue'),
//     path.resolve('./messages.js'),
//     path.resolve('./login-message.js'),
//     path.resolve('./router.js'),
//     path.resolve('./importComponents.js'),
//     path.resolve('./config.js'),
//     path.resolve('./store'),
//     path.resolve('./pages'),
//     path.resolve('./minixs'),
//     path.resolve('./components'),
//     path.resolve('node_modules/element-ui'),
//     path.resolve('node_modules/@ul')
// ]
// webpackconfig.module.rules[2].exclude = [];

if (webpackconfig.mode === 'development') {
    webpackconfig.output.publicPath = '/'
    webpackconfig.output.path = '/';
    // webpackconfig.devServer.contentBase = './';
    webpackconfig.devServer.port = 3111 ;
    webpackconfig.devServer.host = '0.0.0.0';
    webpackconfig.devServer.publicPath = webpackconfig.output.publicPath;
    webpackconfig.devServer.watchOptions.ignored = [];
} else {
    // webpackconfig.output.publicPath = '/jydsj/v2/app-stu/';
    webpackconfig.output.publicPath = '/jktb/sdsfsf/web/';
    webpackconfig.output.path = path.resolve('./dist');
    plugins = plugins.concat([new CleanWebpackPlugin(['assets/css', 'assets/imgs', 'assets/js'], {root: webpackconfig.output.path})]);
}
webpackconfig.plugins = webpackconfig.plugins.concat(
    htmls,
    plugins)
module.exports = webpackconfig;