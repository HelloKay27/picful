const router = require("express").Router();

// GET /api/logs- serve up all logs to a specified user ---
router.get("/", async (req, res, next) => {
  try {
    const logs = await req.user.getLogs();
    res.json(logs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
