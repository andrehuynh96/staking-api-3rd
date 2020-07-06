module.exports = {
  apps : [{
    name: process.env.PM2_NAME || process.env.CI_PROJECT_NAME,
    script: 'index.js',
    instances: process.env.PM2_INSTANCES || 1,
    exec_mode: process.env.PM2_EXEC_MODE || "fork_mode"
  }]
};
