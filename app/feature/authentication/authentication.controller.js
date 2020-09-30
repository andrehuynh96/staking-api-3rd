const logger = require("app/lib/logger");
const StakingAPI = require("app/lib/staking-api")

module.exports = {
  index: async (req, res, next) => {
    try {
      let result = await StakingAPI.authentication(req.body.api_key, req.body.secrect_key);
      return res.status(result.httpCode).send(result.data);
    }
    catch (err) {
      logger.error("authentication:", err);
      next(err);
    }
  },

  withChecksum: async (req, res, next) => {
    try {
      let result = await StakingAPI.authentication3rd(req.body.api_key, req.body.secrect_key, req.get('x-time'), req.get('x-signature'));
      return res.status(result.httpCode).send(result.data);
    }
    catch (err) {
      logger.error("authentication:", err);
      next(err);
    }
  }
}