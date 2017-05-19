// var __dirname = "";
// module.exports = {
//   entry:  __dirname + "app/main.js",//已多次提及的唯一入口文件
//   output: {
//     path: __dirname + "public",//打包后的文件存放的地方
//     filename: "bundle.js"//打包后输出文件的文件名
//   }
// }

//
// 作者：张轩
// 链接：https://zhuanlan.zhihu.com/p/20367175
// 来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var path = require('path');
var webpack = require('webpack');
//var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'public');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  //entry: APP_PATH + "/main.js",
  entry: APP_PATH + "/router.js",
  //devtool: 'source-map',
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader',
        use: ExtractTextPlugin.extract({
               use: 'css-loader'
           })
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
        //  options: {
        //   presets: ["es2015"]
        // },

      },
      // {
      //   test: path.join(__dirname, 'es6'),
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ['es2015','react']
      //   }
      // },


    ]


    // loaders: [
    //   {
    //     test: /\.css$/,
    //     loaders: ['style', 'css'],
    //     include: APP_PATH
    //   }
    // ]
  },
  plugins: [
       new ExtractTextPlugin('styles.css'),

    new webpack.DefinePlugin({ // <-- 减少 React 大小的关键
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(), //删除类似的重复代码
    new webpack.optimize.UglifyJsPlugin(), //最小化一切
    new webpack.optimize.AggressiveMergingPlugin()//合并块
   ],
  resolve: {
          //注意一下, extensions webpack2第一个不是空字符串! 对应不需要后缀的情况.
          extensions: ['.js', '.json', '.sass', '.css', '.less', '.jsx'],
          //模块别名定义，方便后续直接引用别名，无须多写长长的地址
          alias: {
              'app': path.resolve(__dirname, './app')
          }
      },
      devServer: {
              contentBase: "./public",
              historyApiFallback: true,
              hot: true,
              open: true,
              inline: true,
              port: 8888
          },
          // devServer: {
          //     contentBase: './public',
          //     host: "0.0.0.0",
          //     port: 9090,
          //     inline: true,
          //     hot: true
          //   },
  externals: {
    "node_modules": "node_modules"
  }
  //添加我们的插件 会自动生成一个html文件
  // plugins: [
  //   new HtmlwebpackPlugin({
  //     title: 'Hello World app'
  //   })
  // ]
};
