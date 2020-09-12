const joi = require("@hapi/joi");
const logger = require("app/lib/logger");

module.exports = function (schema) {
  return function (req, res, next) {
    const result = schema.validate(req.body);
    if (result.error) {
      logger.error(result.error);
      return res.badRequest("Missing parameters");
    } else {
      next();
    }
  };
};
