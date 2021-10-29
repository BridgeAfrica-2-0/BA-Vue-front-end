module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  lintOnSave: false
};
