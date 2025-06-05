module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        useBuiltIns: "entry",
        corejs: 3
      }
    ]
  ],
  exclude: [/node_modules\/(?!(core-js))/]
};
