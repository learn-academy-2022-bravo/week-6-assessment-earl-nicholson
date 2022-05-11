// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]



describe("sentence", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(sentence(people)).toEqual( ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ● sentence › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//     ReferenceError: sentence is not defined


// b) Create the function that makes the test pass.

// create function called sentence
// starting point is an array => able to use HOF
// use .map to capitalize the first letter
// use .split inside of the key name use .map
// unexpected output. .map to capitalize name with using toUpperCase and splice
// splice gave a error, as a fix use substring
// use string interpolation with the internal .map for name and the external .map for occupation.

const sentence = (array) => {
  return array.map (value => {
    let capLetter = value.name.split(" ").map (letter =>{
      return letter.charAt(0).toUpperCase()+letter.substring(1)})
    return `${capLetter.join(" ")} is ${value.occupation}.`})
}


// PASS  ./code-challenges.test.js
// sentence
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.15 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.69s.
// ➜  week-6-assessment-earl-nicholson git:(week-6-earl-nicholson) ✗ 



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("filter", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(filter(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(filter(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// ● filter › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//     ReferenceError: filter is not defined

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.

// create a function called filter
// inputs is an array of multiple data types
// outputs is an array of num/3 remainders
// remove all data types besides numbers
// use .filter and typeof
// divided each number in the array by 3 and return the remainder
// use .map and %3 


const filter =(array) => {
  let filterNum=  array.filter(num=>{
    return typeof num === 'number'
  })
  let modThree = filterNum.map (value=>{
    return value%3
  })
  return modThree
}


// PASS  ./code-challenges.test.js
// sentence
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// filter
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.145 s, estimated 1 s


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfArray", () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(sumOfArray(cubeAndSum1)).toEqual(99)
    expect(sumOfArray(cubeAndSum2)).toEqual(1125)
  })
})

// ● sumOfArray › takes in an array of numbers and returns the sum of all the numbers cubed

//     ReferenceError: sumOfArray is not defined


// const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.

// create an array called sumOfArray
// input is a array of numbers
// output is a number
// cube every value in the array 
// use .map and ** 3
// add up the cube values 
// use .reduce


const sumOfArray = (array) => {
  let arrayCube = array.map(value => {
    return value**3
  })
  return arrayCube.reduce((a, b) => a + b,)
}

// sumOfArray
//     ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.145 s, estimated 1 s