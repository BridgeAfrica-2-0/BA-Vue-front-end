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
  }
};
