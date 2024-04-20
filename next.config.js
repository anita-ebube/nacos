// next.config.js

const fs = require('fs');
const { join } = require('path');

module.exports = {
  distDir: 'build',

  // After build success, create a 'build' directory
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
            fs.mkdirSync(join(__dirname, 'build'), { recursive: true });
          });
        },
      });
    }

    return config;
  },
};
