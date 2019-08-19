const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'js/app/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/js')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.less$/,
        use:['style-loader','css-loader','less-loader']//顺序不能错，从后往前执行
      }
    ]
  },
  resolve: {
    alias: {
      jquery: path.join(__dirname, 'js/lib/jquery-3.4.1.min.js'),
      mod: path.join(__dirname, 'js/mod'),
      less: path.join(__dirname, 'less')
    }
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //       $: "jquery"
  //   }),
    // new ExtractTextPlugin("css/index.css"),
    // new webpack.LoaderOptionsPlugin({
    //     options: {
    //         postcss: [
    //             autoprefixer(),
    //         ]
    //     }
    // })
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false,
    //     },
    //     output: {
    //         comments: false,
    //     },
    // }),
//]
}
