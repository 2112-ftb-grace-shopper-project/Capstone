const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET = 'neverTell' } = process.env;

const {
  createUser,
  getUserByUsername,
  getUser,
  getAllUsers,
  updateUser,
} = require("../db");

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users)

  } catch (error) {
    console.log("error in get")
    next(error)
  }
})

usersRouter.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const _user = await getUserByUsername(username);
    if (_user) {
      next({
        name: "userAlreadyExists",
        message: "a user with that username already exists",
      });
    } else if (password.length < 8) {
      next({
        name: "passwordTooShort",
        message: "password must be at least 8 characters",
      });
    } else {
      const user = await createUser({ username, password, email });
      const token = jwt.sign(user, JWT_SECRET);
      if (!user) {
        next({
          message: "error here no user"
        })
      }
      res.send({ user, token });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      next({
        name: "MissingCredentialsError",
        message: "Please input both a username and password"
      });
    }
    const user = await getUser({ username, password });
    if (!user) {
      next({
        name: "MissingCredentialError",
        message: "There is no user. please sign up"
      });
    }
    else {
      const token = jwt.sign({
        id: user.id,
        username: user.username
      }, JWT_SECRET);
      
      res.send({user, message: "You are now logged in", token: token });
    } 
    
  } catch ({name, message}) {
    next({name, message});
  }
});


usersRouter.patch("/:id", requireUser, async (req, res, next) => {
  try {
      const { id } = req.params;
      const { email, username } = req.body;
      const update = await updateUser({ id, email, username });

      res.send(update);
  } catch (error) {
      next(error);
  }
});



module.exports = usersRouter;