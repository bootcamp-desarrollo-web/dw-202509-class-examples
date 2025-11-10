// Run this file with:
// node 01-test-json.js

// 1. Create an initial object 
let myVar = {
    name: 'Malcolm',
    surname: 'Gutierrez',
    age: 48,
    family: ['Susana', 'Marcos']
}
console.log('Initial object:', myVar)
console.log('-------------------------------------')

// 2. Create a JSON from the object
let jsonStr = JSON.stringify(myVar)
console.log('JSON:', jsonStr)
console.log('-------------------------------------')

// 3. Back to a javascript object
let parsedJson = JSON.parse(jsonStr)
console.log('Parsed object:', parsedJson)
