module.exports = {
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

  webpackFinal: async (
    /** @type { import('webpack').Configuration } */ config
  ) => {
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      use: [
        {
          loader: 'source-map-loader',
        },
      ],
    });

    return config;
  }
}
