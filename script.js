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



// Exercise 2

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 2.1
// Use forEach to console.log each product name to the console.
products.forEach((prod) => console.log(prod.product))

// 2.2
// Use filter to filter out products that have a name longer than 5 characters
const filteredProd = products.filter((prod) => prod.product.length > 5)
console.log(filteredProd)

// 2.3
// Using both filter and map. Convert all prices that are strings to numbers, and remove all
// products from the array that do not have prices. After this has been done then use reduce 
// to calculate the combined price of all remaining products.
const filteredProd1 = products
    .filter((item) => item.price !== "" && !isNaN(item.price) && item.price !== " ")
    .map((item) => parseInt(item.price))
    .reduce((total, item) => (total + item), 0)
console.log(filteredProd1)


// 2.4
// Use reduce to concatenate all product names to create the following string: 
// banana, mango, potato, avocado, coffee and tea.
const concat = products.reduce((acc, current) => {
    return acc + `${current.product}, `
}, '')
console.log(concat)

// 2.5
// Use reduce to calculate both the highest and lowest-priced items. The names should be 
// returned as the following string:  Highest: coffee. Lowest: banana
const minMax = products.reduce((result) => {
        const prices = products.map((item) => parseInt(item.price))
                                .filter((item) => !isNaN(item));

        const max = Math.max(...prices);
        const min = Math.min(...prices);

        const maxProduct = products.find((item) => parseFloat(item.price) === max);

        const minProduct = products.find((item) => parseFloat(item.price) === min);

        result = `Highest: ${maxProduct.product}. Lowest: ${minProduct.product}`;
        return result;
    }, "")
console.log(minMax)

// 2.6
// Using only Object.entries and reduce recreate the object with the exact same values. 
// However, the following object keys should be changed in the new array
//      product should be changed to name
//      price should be changed to cost
const ObjArr = Object.entries(products)
    .reduce((acc, [ key, val ]) => {
        acc[key] = { "Name": val.product, "Cost": val.price}
        return acc
    }, {})
console.log(ObjArr)