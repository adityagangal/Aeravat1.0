const jwt = require("jsonwebtoken");

const SECRET_KEY = "aditya";

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
      req.userID = user.uid;
    } else {
      return res.status(401).json({ message: "Unauthorized User" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized User", error: error });
  }
};

module.exports = auth;
