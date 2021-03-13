const router = require("express").Router();
const Log = require("../db/models/log");
const User = require("../db/models/user");

// GET /api/user - serve up all logs to a specified user --FIX ROUTE
router.get("/", async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
