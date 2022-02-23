const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'production',
  optimization: {
    nodeEnv: 'production',
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.s|css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  transpileDependencies: [
    // can be string or regex
    'vue-moment',
    'vue-mapbox',
    'vue-animate-onscroll',
    'vue-agile',
    'mapbox-gl'
  ],
  plugins: [
    require('cssnano')({
      preset: 'default'
    }),
    new MiniCssExtractPlugin({ filename: "[name].[hash].css" })
  ]
};
