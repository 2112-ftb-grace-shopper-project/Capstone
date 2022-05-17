// create an api router
// attach other routers from files in this api directory (users, activities...)
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const express = require("express");
const apiRouter = express.Router();

const { getUserById } = require("../db");

//health check
apiRouter.get("/health", async (req, res, next) => {
  res.send({
    message: "server is healthy",
  });
});

apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");

  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    try {
      const { id } = jwt.verify(token, JWT_SECRET);
      if (id) {
        req.user = await getUserById(id);
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

// const activitiesRouter = require("./activities");
// apiRouter.use("/activities", activitiesRouter);

// const routinesRouter = require("./routines");
// apiRouter.use("/routines", routinesRouter);

// const routineActivitiesRouter = require("./routine_activities");
// apiRouter.use("/routine_activities", routineActivitiesRouter);

apiRouter.use((error, req, res, next) => {
  res.status(500).send({
    name: error.name,
    message: error.message,
  });
});

module.exports = apiRouter;