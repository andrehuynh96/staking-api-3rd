const logger = require("app/lib/logger");
const StakingAPI = require("app/lib/staking-api")

module.exports = async (req, res, next) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    if (token && (token.startsWith("Bearer ") || token.startsWith("bearer "))) {
      token = token.slice(7, token.length);
    }
    let result = await StakingAPI.voting(token, {
      tx_id: req.body.tx_id,
      voter_address: req.body.voter_address,
      memo: req.body.memo,
      type: req.body.type,
      amount: req.body.amount
    });
    return res.status(result.httpCode).ok(result.data);
  }
  catch (err) {
    logger.error("tracking voting fail:", err);
    next(err);
  }
}