const config = require("app/config");
const axios = require("axios");
const logger = require("app/lib/logger")
const redisResource = require("app/resource/redis");
const redis = require("app/lib/redis");
const cache = redis.client();

module.exports = {
  authentication: async () => {
    try {

      return { httpCode: 200, data: "" };
    }
    catch (err) {
      logger.error("Authentication fail:", err);
      return { httpCode: err.response.status, data: err.response.data };
    }
  },
  voting: async (token, data) => {
    try {

      return { httpCode: 200, data: "" };
    }
    catch (err) {
      logger.error("voting fail:", err);
      return { httpCode: err.response.status, data: err.response.data };
    }
  }
}
