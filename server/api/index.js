const router = require("express").Router();

// app.use "/api"
router.use("/logs", require("./logs"));

// app.use "/api"
router.use("/user", require("./users"));

router.use("/capture", require("./capture"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
