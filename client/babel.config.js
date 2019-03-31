/*eslint-disable */
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'transform-imports',
      {
        '@fortawesome/free-solid-svg-icons': {
          transform: '@fortawesome/free-solid-svg-icons/${member}',
          skipDefaultConversion: true,
        },
      },
    ],
    ['@babel/plugin-transform-runtime'],
    ['dynamic-import-node-babel-7'],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          reducers: './src/reducers',
        },
      },
    ],
  ],
}
/*eslint-enable */
