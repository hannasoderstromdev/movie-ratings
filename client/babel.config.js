module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
  plugins: [
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
