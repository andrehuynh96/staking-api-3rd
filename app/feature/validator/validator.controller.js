const logger = require("app/lib/logger");
const StakingAPI = require("app/lib/staking-api")

module.exports = async (req, res, next) => {
  try {
    let platform = req.params.platform ? req.params.platform.toUpperCase() : null;
    let result = await StakingAPI.getValidators(req.token, platform);
    return res.status(result.httpCode).send(result.data);
  }
  catch (err) {
    logger.error("get validator fail:", err);
    next(err);
  }
}