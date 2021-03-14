const createProxyMiddleware = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000",
      secure: false,
      changeOrigin: true,
      logLevel: "debug",
    })
  );
  app.use(
    "/auth",
    createProxyMiddleware({
      target: "http://localhost:4000",
      secure: false,
      changeOrigin: true,
      logLevel: "debug",
    })
  );
};
