const logger = require("app/lib/logger");
const config = require("app/config");
const StakingAPI = require("app/lib/staking-api")

module.exports = async (req, res, next) => {
  try {
    return res.ok();
  }
  catch (err) {
    logger.error("tracking voting fail:", err);
    next(err);
  }
}