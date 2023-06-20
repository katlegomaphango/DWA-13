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
const sortedArr = provinces.toSorted()
console.log(sortedArr)

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
const containsS = names.map((name) => {
    return name.toUpperCase().includes('S')
})
console.log(containsS)

// 1.8
// Using only reduce, turn the above into an object that indicates the
// province of an individual. In other words:
const nameProvObj = names.reduce((obj, name, index) => {
    obj[name] = provinces[index];
    return obj;
}, {});
console.log(nameProvObj);


// Exercise 2

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

console.log(
    products.forEach((prod) => console.log(prod.product)),

    products.filter((prod) => prod.product.length > 5),

    products.filter((item) => item.price !== "" && !isNaN(item.price) && item.price !== " ")
            .map((item) => parseInt(item.price))
            .reduce((total, item) => (total + item), 0),

    products.reduce((acc, current) => acc + `${current.product}, `, ''),

    products.reduce((result) => {
        const prices = products.map((item) => parseInt(item.price))
                                .filter((item) => !isNaN(item));

        const max = Math.max(...prices);
        const min = Math.min(...prices);

        const maxProduct = products.find((item) => parseFloat(item.price) === max);

        const minProduct = products.find((item) => parseFloat(item.price) === min);

        result = `Highest: ${maxProduct.product}. Lowest: ${minProduct.product}`;
        return result;
    }, ""),

    Object.entries(products)
    .reduce((acc, [ key, val ]) => {
        acc[key] = { "Name": val.product, "Cost": val.price}
        return acc
    }, {})
)