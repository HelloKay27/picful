const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/api/*", {
      target: "https://localhost:4000",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    proxy("/auth/*", {
      target: "https://localhost:4000",
      secure: false,
      changeOrigin: true,
    })
  );
};
