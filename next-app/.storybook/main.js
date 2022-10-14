const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require("path")

module.exports = {
  "typescript" : { reactDocgen: false },
  "staticDirs": ['public'],
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, "@emotion/babel-preset-css-prop"],
  }),
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  //https://zenn.dev/enish/articles/cde07d3d22f95b
  // webpackFinal: async (config) => {
  //   config.resolve.plugins = [
  //     new TsconfigPathsPlugin({
  //       configFile: path.resolve(__dirname, '../tsconfig.json')
  //     }),
  //   ];
  //   return config;
  // }
}