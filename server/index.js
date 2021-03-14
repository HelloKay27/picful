const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const { User } = require("./db/models");

const app = express();

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.use(
  session({
    secret: "picful",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", require("./api")); // include our routes!

app.use("/auth", require("./auth"));

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

app.listen(4000, () => {
  console.log("our server is listening on port 4000");
});

module.exports = app;
