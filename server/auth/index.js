const router = require("express").Router();

const { User } = require("../db/models");
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user.password !== req.body.password) res.sendStatus(401);
    else req.login(user, (err) => (err ? next(err) : res.send(user)));
  } catch (error) {
    next(error);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    req.login(user, (err) => (err ? next(err) : res.send(user)));
  } catch (error) {
    next(error);
  }
});

router.get("/me", (req, res) => res.send(req.user));

module.exports = router;
