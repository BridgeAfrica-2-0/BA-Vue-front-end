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
    // can be string or regex
    "vue-moment",
    "vue-mapbox",
    "vue-animate-onscroll",
    "vue-agile",
    "mapbox-gl"
  ]
};
