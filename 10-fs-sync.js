const { readFileSync, writeFileSync } = require('fs')
console.log("start");
const firstFile = readFileSync('./content/first.txt', 'utf-8')
const secondFile = readFileSync('./content/second.txt', 'utf-8')

console.log(firstFile, secondFile);

writeFileSync('./content/result-sync.txt', `Here is the result ${firstFile} , ${secondFile}`, { flag: 'a' })
console.log("end");
console.log("next one");