const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(jsx|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
            },
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },

  core: {
    builder: "webpack5",
  },
};
