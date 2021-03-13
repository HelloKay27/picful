const router = require("express").Router();
const Log = require("../db/models/log");
const User = require("../db/models/user");

// GET /api/logs/:userId - serve up all logs to a specified user --- FIX ROUTE
router.get("/", async (req, res, next) => {
  try {
    const logs = await Log.findAll({
      // where: {
      //   userId: req.params.userId,
      // },
      // include: {
      //   //add firstName of user
      // },
    });
    res.json(logs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
