/* eslint no-process-env: "off"*/
require('dotenv').config();
const fs = require("fs");
const pkg = require('../../package.json');

const logFolder = process.env.LOG_FOLDER || './public/logs';

const config = {
  logger: {
    level: process.env.LOG_LEVEL,
    console: {
      enable: true,
      level: process.env.LOG_LEVEL,
    },
    defaultLevel: "debug",
    file: {
      compress: false,
      app: `${logFolder}/app.log`,
      error: `${logFolder}/error.log`,
      access: `${logFolder}/access.log`,
      format: '.yyyy-MM-dd',
    },
    appenders: ['CONSOLE', 'FILE', 'ERROR_ONLY'],
  },
  app: {
    name: process.env.APP_NAME || 'staking-api-3rd',
    version: pkg.version,
    description: pkg.description,
    buildNumber: process.env.BUILD_NUMBER || process.env.CI_JOB_ID || '',
    port: parseInt(process.env.PORT || process.env.APP_PORT),
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    prefix: process.env.REDIS_PREFIX || 'staking:api:partner:cache',
    usingPass: process.env.REDIS_USING_PASS || 0,
    pass: process.env.REDIS_PASS,
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE.toLowerCase() === 'true'
      : false,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    mailSendAs: process.env.MAIL_SEND_AS,
  },
  rateLimit: process.env.RATE_LIMIT ? parseInt(process.env.RATE_LIMIT) : 100,
  stakingApi: {
    url: process.env.STAKING_API_URL
  },
};

module.exports = config;
