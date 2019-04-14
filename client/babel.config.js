/*eslint-disable */
module.exports = {
  presets: [
    '@babel/typescript',
    // ['@babel/preset-env', { targets: { node: 'current' } }],
    // '@babel/preset-react',
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
    ['@babel/plugin-transform-spread'],
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-transform-async-to-generator'],
    ['@babel/plugin-transform-modules-commonjs'],
    // ['@babel/plugin-transform-react-constant-elements'],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-syntax-dynamic-import'],
    ['dynamic-import-node-babel-7'],
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
