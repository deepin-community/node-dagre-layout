const {nodeResolve} = require("@rollup/plugin-node-resolve");
var buble = require('rollup-plugin-buble');
var cjs = require('@rollup/plugin-commonjs');

const config = {
  output: {
    indent: false,
    extend: true,
  },
  plugins: [
    buble(),
    nodeResolve(
     {
        modulePaths: ['/usr/share/nodejs', '/usr/lib/nodejs'],
        preferBuiltins: false
     }
    ),
    cjs(),
  ]
};

module.exports = [
  config
];
