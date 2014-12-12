#!/usr/bin/env node

function PascalCase(str) {
  var parts = str.split('-');
  for (var i=0, l=parts.length; i<l; i++) {
    parts[i] = parts[i].substring(0, 1).toUpperCase() + parts[i].substring(1);
  }
  return parts.join('');
}

console.log(PascalCase(require(process.cwd() + '/package.json').name));