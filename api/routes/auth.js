const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// register
router.post("/register", async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    res.status(500).json("User already exist in the database");
  }
  try {
    const user = await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    return res.status(200).json(user);
  } catch (error) {}
});

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  try {
    if (user) {
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      const access_token = jwt.sign(
        { user: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY
      );

      if (originalPassword !== req.body.password) {
        res.status(404).json("Wrong username or password");
      } else {
        const { password, ...userInfo } = user._doc;
        res.status(200).json({ ...userInfo, access_token });
      }
    } else {
      res.status(400).json("User not found in the database");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
