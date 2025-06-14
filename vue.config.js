module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  transpileDependencies: [
    "core-js",
    "vue-moment",
    "vue-mapbox",
    "vue-animate-onscroll",
    "vue-agile",
    "mapbox-gl"
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "core-js/es6": "core-js/es"
      }
    }
  },
  devServer: {
    host: "0.0.0.0", // allow access from ngrok
    port: 8080,
    allowedHosts: ["eager-lynx-tight.ngrok-free.app", "all"]
  }
};
