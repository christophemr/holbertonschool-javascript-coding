#!/usr/bin/node

const fs = require('fs');
const { argv } = require('process');

fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    process.stdout.write(data);
  }
});