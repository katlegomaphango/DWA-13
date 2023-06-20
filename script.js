//@ts-check

console.log("......EXERCISE 1......")

const provinces = [
    'Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'
]

const names = [
    'Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'
]

//1.1
names.forEach((name) => console.log(name))

//1.2
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`))

//1.3
console.log(provinces.map((province) => province.toUpperCase()))

//1.4
const newArr = names.map((name) => name.length)
console.log(newArr)

//1.5
// const sortedArr = provinces.toSorted()
// console.log(newArr)

// 1.6 
// Use filter to remove all provinces that have the word Cape in them.
// After filtering the array, return the amount of provinces left. 
// The final value should be 3
const filteredArr = provinces.filter((province) => !province.includes('Cape'))
console.log(filteredArr.length)

// 1.7
// Create a boolean array by using map and some to determine whether a name
// contains an S character. 
// The result should be [true, true, false, true, false, true, false]
const containsS = names.some((name) => name.includes('S'))
console.log(containsS)

// 1.8
// Using only reduce, turn the above into an object that indicates the
// province of an individual. In other words: