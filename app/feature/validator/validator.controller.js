const logger = require("app/lib/logger");
const StakingAPI = require("app/lib/staking-api")

module.exports = async (req, res, next) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    if (token && (token.startsWith("Bearer ") || token.startsWith("bearer "))) {
      token = token.slice(7, token.length);
    }
    let result = await StakingAPI.validator(token, req.query.platform, req.query.validator_address);
    return res.status(result.httpCode).ok(result.data);
  }
  catch (err) {
    logger.error("get validator info fail:", err);
    next(err);
  }
}