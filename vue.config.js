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
    iconPaths: {
      favicon32: 'img/icons/icon-72x72.png',
      favicon16: 'img/icons/icon-72x72.png',
      appleTouchIcon: 'img/icons/icon-152x152.png',
      msTileImage: 'img/icons/icon-144x144.png'
    }
  }
};
