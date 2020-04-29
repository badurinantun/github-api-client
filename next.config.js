const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
  env: {
    token: process.env.ACCESS_TOKEN,
  },
};
