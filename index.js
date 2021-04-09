#!/usr/bin/env node
const [ ,, ...args ] = process.argv;

function display(jwt) {
  if (!!jwt) {
    return JSON.parse(
      `{
        "header": ${Buffer.from(jwt.split('.')[0], 'base64').toString()},
        "payload": ${Buffer.from(jwt.split('.')[1], 'base64').toString()},
        "signature": "${jwt.split('.')[2]}"
      }`);
  }

  return "Not a JWT";
}

const jwt = /:$/.test(args[0]) ? args[1] : args[0];

console.log(display(jwt));
