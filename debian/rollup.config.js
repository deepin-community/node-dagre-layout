import node from "@rollup/plugin-node-resolve";
var buble = require('rollup-plugin-buble');
var cjs = require('@rollup/plugin-commonjs');

const config = {
  output: {
    indent: false,
    extend: true,
  },
  plugins: [
    buble(),
    node(
     {
        moduleDirectory: ['/usr/share/nodejs', '/usr/lib/nodejs'],
        preferBuiltins: false
     }
    ),
    cjs(),
  ]
};

export default [
  config
];
