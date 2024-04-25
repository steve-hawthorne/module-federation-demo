const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
    uniqueName: 'shard',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shard',
      library: { type: 'var', name: 'shard' },
      filename: 'remoteEntry.js',
      exposes: {
        Shard: './projects/shard/src/app/app.component.ts',
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true },
        'shared': { singleton: true, eager: true },
      },
    }),
  ],
};