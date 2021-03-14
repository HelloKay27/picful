const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/api/*", {
      target: "http://picful.herokuapp.com:4000",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    proxy("/auth/*", {
      target: "http://picful.herokuapp.com:4000",
      secure: false,
      changeOrigin: true,
    })
  );
};
