const Config = {
  presets: [['@babel/env', { modules: 'commonjs', useBuiltIns: 'entry' }], '@babel/react'],
  plugins: ['@babel/proposal-object-rest-spread', '@babel/proposal-class-properties'],
}

module.exports = Config
