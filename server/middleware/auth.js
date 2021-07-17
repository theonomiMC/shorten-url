const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
  
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" })
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    req.user = verified.user
    next();

  } catch (e) {
    return res.status(401)
      .json({ message: 'Not authorized' })
  }
}

module.exports = auth;