/**
 * webpack的基本配置
 */
const {VueLoaderPlugin} = require ('vue-loader');

const ExtractPlugin = require ('mini-css-extract-plugin');
const miniCss = require ('optimize-css-assets-webpack-plugin');
const uglifyjs = require ('uglifyjs-webpack-plugin');
// const copy = require ('copy-webpack-plugin');
const webpack = require ('webpack');
const path = require ('path')
// const happypack = require('happypack');



//定义环境变量
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
//加载配置
// const webpackConfig = require ('./sso.webpack.config');
// const configs = webpackConfig[process.env.NODE_ENV];

// if (!configs) {
//     throw new Error ('没有获取到对应的配置,当前环境为:' + process.env.NODE_ENV);
// }


//基本配置;
const config = {
    mode        : process.env.NODE_ENV,
    target      : 'web',
    entry       : [],
    output      : {
        path      : '/',
        publicPath: '/',
        filename:'assets/js/[name].[contentHash:8].js',
    },
    resolve:{
        extensions:['.js','.vue'],
    },
    optimization: {
        //所有的入口都用统一一个运行时
        runtimeChunk: 'single',
        sideEffects:true,
        splitChunks : {
            //自身软件的通用库打包到一起
            chunks     : 'initial',
            name       : 'P',
            minChunks  : 2,
            maxInitialRequests: 8,
            cacheGroups: {}
        },

    },
    module      : {
        rules: [
            {test: /\.vue$/, use: [{loader:'vue-loader',options:{compilerOptions:{preserveWhitespace: false}}}]},
            {
                test: /\.less$|\.css$/,
                use : [ExtractPlugin.loader, 'css-loader', {
                    loader : 'postcss-loader',
                    options: {sourceMap: true}
                }, {loader: 'less-loader', options: {javascriptEnabled: false}}]
            },
            {
                test: /\.js$/,
                use: [
                    {loader: 'babel-loader'},
                    {loader:'js-conditional-compile-loader',options:{
                            isDebug:process.env.NODE_ENV === 'development',
                            NODEBUG: process.env.NODE_ENV === 'production'
                        }}
                ],
                // exclude: path.join (__dirname, 'node_modules')
                exclude: function(arg){
                    if(/node_modules/g.test(arg)) return true
                    return false;
                }
            },
            // {test:/\.js$/,use:[{loader:'babel-loader'}]},
            {
                test: /\.(jpg|png|jpeg|svg|bmp|webp)$/,
                use : [{
                    loader : 'url-loader',
                    options: {limit: 4096, name: '[name].[contentHash:8].[ext]', outputPath: 'assets/imgs/'}
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/i,
                use : [{
                    loader : 'url-loader',
                    options: {limit: 4096, name: '[name].[contentHash:8].[ext]', outputPath: 'assets/fonts/'}
                }]
            },
        ]
    },
    plugins     : [
        //动态链接库,用于静态文件的快速编译
        // new webpack.DllReferencePlugin ({
        //     // 动态链接库的全局变量名称，需要和 output.library 中保持一致
        //     // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
        //     context : __dirname,
        //     // 例如 react.manifest.json 中就有 "name": "_dll_react"
        //     manifest: require ('./src/assets/libs/libs-manifest.json'),
        //     name    : 'libs_dll'
        // }),
        //用于给插件模块提供环境变量
        new webpack.DefinePlugin ({'process.env': {NODE_ENV: '"' + process.env.NODE_ENV + '"'}}),
        //提取html里面的样式到独立文件里面
        new ExtractPlugin ({filename: 'assets/css/[name].[contentHash:8].css'}),
        new VueLoaderPlugin (),
        // new BundleAnalyzerPlugin(),
        // new happypack({
        //     id: 'js',
        //     cache: true,
        //     threads: require('os').cpus().length, //开几个线程去处理
        //     loaders: [ 'cache-loader','babel-loader?cacheDirectory' ],
        //     verbose: true,         //允许 HappyPack 输出日志 ,默认true
        //     //threadPool: happyThreadPool,
        // })
    ]
};
// config.plugins=config.plugins.concat(webpackConfig.htmls);
// config.optimization.splitChunks.cacheGroups.default.name='vendors';
if (process.env.NODE_ENV === 'development') {//开发配置
    config.devServer = {
        contentBase     : 'src',//path.join (__dirname, 'src'),
        port            : 3001,
        host            : '0.0.0.0',
        hot             : false,
        publicPath      : '/',
        progress        : false,
        disableHostCheck: true,
        watchOptions    : {
            poll             : 1000,//监测修改的时间(ms)
            aggregeateTimeout: 600, //防止重复按键，500毫米内算按键一次
            //ignored          : /node_modules/,//不监测
        },
        stats:'minimal'
        // watchContentBase: true
    };

    // config.plugins.push (new webpack.HotModuleReplacementPlugin ())
    // config.output.filename = 'assets/js/[name].[hash:8].js';
    config.optimization.minimize = false;
} else {//构建build配置
    config.stats='verbose';
    config.optimization.minimizer = [new miniCss ({cssProcessorOptions: {safe: true}}),
        new uglifyjs ({
            sourceMap: false,
            uglifyOptions: {
                compress: {
                    warnings: false, // 去除warning警告
                    dead_code: true, // 去除不可达代码
                    drop_debugger: true, // 去除debugger
                    drop_console: true, // 去除console
                }
            }
        })];
    // config.output.filename='assets/js/[name].[chunkHash:8].js'
    // config.output.filename = 'assets/js/[name].[hash:8].js'
    // config.plugins.push (
    //         new CleanWebpackPlugin (['index.html', 'assets/css', 'assets/imgs', 'assets/js'], {root: path.resolve (configs.outputDir)})
    // new copy([
    //     {from: 'src/assets/img/no_photo.png',to: 'assets/img/'},
    //     {from: 'src/assets/img/no_photo_large.png',to: 'assets/img/'}
    // ]),
    // );
}
module.exports = config;