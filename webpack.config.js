// const devtool = "source-map";

module.exports = {
  devtool: "source-map",
  mode: "none",
};

module.rules = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-react"],
      },
    },
  ],
};
