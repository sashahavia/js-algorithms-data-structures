module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        bugfixes: true,
        useBuiltIns: 'entry',
        corejs: '3.10.2'
      },
    ],
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import"
  ]
};
