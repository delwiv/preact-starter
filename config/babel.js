module.exports = {
  passPerPreset: true,
  presets: [
    { "plugins": [ "transform-runtime" ] },
    {
      "passPerPreset": false,
      "presets": [
        ["es2015", {loose: true, modules: false}],
        "stage-2"
      ]
    }
  ],
  plugins: [
    ['transform-react-jsx', {pragma: 'h'}]
  ]
};
