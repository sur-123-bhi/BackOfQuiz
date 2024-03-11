const express = require("express");
const { UserModel } = require("../models/user.model.js");

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  const { name, score, category } = req.body;

  try {
    const user = new UserModel({
      name,
      score,
      category
    });
    await user.save();
    res.send({ msg: "user added"});

  } catch (err) {
    res.send({ err: err });
  }
});

module.exports = {
  userRouter
};
