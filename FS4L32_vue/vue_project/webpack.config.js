const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  // Điểm bắt đầu của ứng dụng
  entry: './src/main.js',

  // Output cho các bundles
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  // Cấu hình cho module loaders
  module: {
    rules: [
      // Rule cho .vue files
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // Rule cho .js files
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // Rule cho .css files
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // Rule cho images
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      }
    ]
  },

  // Cấu hình cho plugins
  plugins: [
    // Đảm bảo thêm plugin này để xử lý .vue files
    new VueLoaderPlugin()
  ],

  // Cấu hình resolve
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src'),
    }
  },

  // Development Server
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },

  // Source Maps
  devtool: '#eval-source-map'
};

// Nếu là production, sửa đổi cấu hình
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // Thêm các plugins cần thiết cho production ở đây
  ]);
}
