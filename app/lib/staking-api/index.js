const config = require("app/config");
const axios = require("axios");
const logger = require("app/lib/logger")
const redisResource = require("app/resource/redis");
const redis = require("app/lib/redis");
const cache = redis.client();

module.exports = {
  authentication: async (apiKey, secretKey) => {
    try {
      let result = await axios.post(
        `${config.stakingApi.url}/accounts/authentication`,
        {
          api_key: apiKey,
          secret_key: secretKey,
          grant_type: "client_credentials"
        }
      );
      return { httpCode: 200, data: result.data };
    }
    catch (err) {
      logger.error("Authentication fail:", err);
      return { httpCode: err.response.status, data: err.response.data };
    }
  },

  voting: async (token, data) => {
    try {
      let result = await axios.post(`${config.stakingApi.url}/voting/3rd`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      return { httpCode: 200, data: result.data };
    }
    catch (err) {
      logger.error("voting fail:", err);
      return { httpCode: err.response.status, data: err.response.data };
    }
  },

  getValidators: async (token, platform) => {
    try {
      let result = await axios.get(`${config.stakingApi.url}/validators-info/${platform}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      return { httpCode: 200, data: result.data };
    }
    catch (err) {
      logger.error("getValidators fail:", err);
      return { httpCode: err.response.status, data: err.response.data };
    }
  }
}
