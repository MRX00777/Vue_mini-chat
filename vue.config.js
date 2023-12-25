const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  publicPath: `/Vue_mini-chat/`,
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@src': path.join(__dirname, 'src')
      }
    }
  }
})
