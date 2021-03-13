const router = require("express").Router();
const multer = require("multer");
const { Log } = require("../db/models");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, "public/uploads"),
    filename: (req, file, cb) => cb(null, Date.now() + file.originalname),
  }),
});

router.post("/", upload.single("file"), async (req, res, next) => {
  try {
    const log = await Log.create({
      imageUrl: "//localhost:4000/uploads/" + req.file.filename,
      date: req.body.date,
      description: req.body.description,
    });
    console.log(req.body);
    res.send(log);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
