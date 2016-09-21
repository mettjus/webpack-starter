const _ = require('lodash')

console.log( _.camelCase('hello world') )

let div = document.createElement('div')
div.innerHTML = _.camelCase('hello world')
document.body.appendChild(div)