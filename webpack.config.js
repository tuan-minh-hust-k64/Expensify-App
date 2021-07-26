const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            loader: 'babel-loader',  // tải các module có nhiệm vụ chuyển đổi
            test: /\.js$/,        // chỉ chuyển đổi các file có đuôi là .js,(biểu thức chính quy /.js$/)
            exclude: /node_modules/,    // ngoại trừ 1 số tệp nhất định không cần trải qua chuyển đổi của loader
        },
        {
            test: /\.s?css$/,
            use: ['style-loader','css-loader','sass-loader']
        }
    ]      // rules là 1 mảng có thể chứa nhiều đối tượng, mỗi đối tượng là 1 bộ lọc, hay 1 nhiệm vụ như trên
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        historyApiFallback: true,
    }
}