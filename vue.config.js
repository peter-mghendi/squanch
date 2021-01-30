module.exports = {
  configureWebpack: () => {
    return {
      module: {
        rules: [
          {
            test: /\.m?jsx?$/,
            loader: "babel-loader",
            options: {
              plugins: ["@babel/plugin-proposal-optional-chaining"],
            },
            include: /node_modules\/primevue/,
          },
        ],
      },
    };
  },
};
