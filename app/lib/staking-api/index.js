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
      return { httpCode: 200, data: result.data.data };
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
  validator: async (token, plaform, validator_address) => {
    try {
      let result = await axios.get(`${config.stakingApi.url}/validator?platform=${plaform}&validator_address=${validator_address}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      return { httpCode: 200, data: result.data };
    } catch (err) {
      logger.error("get validator info fail:", err);
      return { httpCode: err.response.status, data: err.response.data }
    }
  }
}
