const webpackconfig = require('./webpack.config');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//模版文件
const LAYOUT = './layout.html';
//打包的入口entry,相对于本文件路径,而且是要绝对路径
const files = [
    {file: '/main.js', chunks: ['S', 'L', 'P', 'framework7'], name: 'index.html'},
];
const entry = {};
const htmls = [];
let cacheGroups = {};
let plugins = [
    // new BundleAnalyzerPlugin()
];
// const htmlPlugins=[];
// for(var i of webpackConfig.entryInfo){
//     htmlPlugins.push(new HtmlWebpackPlugin ({
//         template: configs.layoutHtml,
//         filename: i.dir+'/'+i.name+'.html',
//         chunks  : [i.name, 'static', 'libs', 'runtime', 'public'],
//     }))
// }
let p = null, name = null;
for (var i of files) {
    p = path.parse(i.file);
    entry[p.name] = path.resolve('./' + i.file);
    //封装html页面
    name = p.dir + '/' + p.name + '.html';
    var obj = {
        template: i.layout ? 'src' + i.layout : LAYOUT,
        filename: i.name ? i.name : name.substring(1),
        chunks: i.chunks ? i.chunks.concat([p.name, 'runtime']) : [p.name, 'S', 'L', 'runtime', 'P', 'C'],
        minify: {
            collapseWhitespace: true,
            removeComments: true
        }
    }
    if (i.favicon) obj.favicon = i.favicon
    htmls.push(new HtmlWebpackPlugin(obj));
    // entryInfo.push(p);
}
cacheGroups = {
    framework7: {
        test: /[\\/]node_modules[\\/](framework7)|importF7\.less/,
        priority: 12,
        name: 'framework7',
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
}
webpackconfig.entry = entry;
webpackconfig.optimization.splitChunks.cacheGroups = cacheGroups;

if (webpackconfig.mode === 'development') {
    // webpackconfig.output.publicPath='/jydsjweb/';
    webpackconfig.output.path = '/';
    webpackconfig.devServer.port = 3006;
    webpackconfig.devServer.host = '0.0.0.0';
    webpackconfig.devServer.publicPath = webpackconfig.output.publicPath;
    console.log('http://localhost:3006')
    webpackconfig.devServer.watchOptions.ignored = [];
    // webpackconfig.devServer.publicPath='/';
} else {
    // webpackconfig.output.publicPath='/bigapp/jydsj/mobile/';
    webpackconfig.output.publicPath = '/jktb/sdsfsf/mobile/';
    webpackconfig.output.path = path.resolve('./dist');
    plugins = plugins.concat([new CleanWebpackPlugin(['assets/css', 'assets/imgs', 'assets/js'], {root: webpackconfig.output.path})]);
}
webpackconfig.plugins = webpackconfig.plugins.concat(
    htmls,
    plugins)
module.exports = webpackconfig;