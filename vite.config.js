/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const vue = require('@vitejs/plugin-vue');
const postcssCustomMedia = require('postcss-custom-media');

// https://vitejs.dev/config/
module.exports = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssCustomMedia({
          importFrom: 'node_modules/open-props/media.min.css',
        }),
      ],
    },
  },
};
