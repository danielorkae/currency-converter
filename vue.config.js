const publicPath =
  process.env.NODE_ENV === "production"
    ? "/currency-converter/"
    : "/";

module.exports = {
  publicPath,
  pwa: {
    name: "Currency Converter",
    themeColor: "#3f51b5",
    msTileColor: "#1A237E",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
  }
};
