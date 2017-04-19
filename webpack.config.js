const path = require('path');
const {
  createConfig, customConfig, addPlugins, defineConstants, env, entryPoint, setOutput, sourceMaps } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const devServer = require('@webpack-blocks/dev-server2');
const happypack = require('webpack-blocks-happypack');
const html = require('webpack-blocks-html');
const { productionPlugins } = require('./webpack.plugins');

module.exports = createConfig([
  setOutput('./dist/bundle.js'),
  happypack([
    babel(),
  ]),
  html({
    title: 'styled-components-sandbox',
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
  }),
  customConfig({
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules',
      ],
    },
  }),
  env('development', [
    entryPoint('./src/index.dev.js'),
    devServer(),
    sourceMaps(),
  ]),
  env('production', [
    entryPoint('./src/index.js'),
    addPlugins(productionPlugins),
  ]),
]);
