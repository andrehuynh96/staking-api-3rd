const jwt = require("jsonwebtoken");
const config = require("app/config");

module.exports = function (req, res, next) {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (token && (token.startsWith("Bearer ") || token.startsWith("bearer "))) {
    token = token.slice(7, token.length);
  }
  else {
    return res.unauthorized();
  }
  if (!token) {
    return res.badRequest();
  }
  req.token = token;
  return next();
};
