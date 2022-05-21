// const { response } = require("express");
const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET = 'neverTell' } = process.env;
const { requireUser } = require('./utils')

const {
  createUser,
  getUserByUsername,
  getUser,
  getAllUsers,
//   getPublicRoutinesByUser
} = require("../db");
// const { user } = require("pg/lib/defaults");

usersRouter.get("/", async (req, res, next) => {
  const users = await getAllUsers();
  res.send(users)
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
      const user = await createUser({ username, password });
      const token = jwt.sign(user, JWT_SECRET);
      if(!user) {
        next({
          message: "error here no user"
        })
      }
      res.send({user, token});
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});



usersRouter.post("/login", async (req, res, next) => {
  const {username, password} = req.body;
  
  try {
    if (!username|| !password) {
      next({
        name: "MissingCredentialsError",
        message: "Please input both a username and password"
      });
    }
    
    const user = await getUser({username, password});
    
    if(!user) {
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
      
      res.send({user, message: "thanks for signing up", token:token});
    } 
    
  } catch ({name, message}) {
    next({name, message});
  }
});


usersRouter.get("/me", requireUser,  async(req, res, next) => {
  try {
    res.send(req.user)

  } catch (error) {
    next(error);
  }
})




module.exports = usersRouter;