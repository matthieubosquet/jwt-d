#!/usr/bin/env node
const [ ,, ...args ] = process.argv;

console.log(JSON.parse(
  `{
    "header": ${Buffer.from(args[0].split('.')[0], 'base64').toString()},
    "payload": ${Buffer.from(args[0].split('.')[1], 'base64').toString()},
    "signature": "${args[0].split('.')[2]}"
  }`));
