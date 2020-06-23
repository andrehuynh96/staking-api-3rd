const config = require("app/config");
const axios = require("axios");
const logger = require("app/lib/logger")
const redisResource = require("app/resource/redis");
const redis = require("app/lib/redis");
const cache = redis.client();

module.exports = {
  authentication: async (apiKey, secretKey) => {
    try {
      let token = null;
      let access_token = await cache.getAsync(redisResource.stakingApi.token+':'+apiKey);
      if (access_token) {
        token = access_token;
      } else {
        let result = await axios.post(
          `${config.stakingApi.url}/accounts/authentication`,
          {
            api_key: apiKey,
            secret_key: secretKey,
            grant_type: "client_credentials"
          }
        );
        await cache.setAsync(redisResource.stakingApi.token+':'+apiKey, result.data.data.access_token, "EX", parseInt(result.data.data.expires_in) - 10);
        token = result.data.data.access_token;
      }
      
      return { httpCode: 200, data: token };
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
  }
}
