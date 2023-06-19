# DWA_13.5 Challenge 1: Higher Order Functions

## Complete the following exercises (each with corresponding data)

### Exercise 1

```
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']
```

 - Use ``` forEach ``` to console log each name to the console. You are allowed to call console.log seven times.
 - Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you are only allowed to call console.log seven times.
 - Using map loop over all province names and turn the string to all uppercase. Log the new array to the console.
 - Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 8, 7, 7]
 - Using toSorted to sort all provinces alphabetically.
 - Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3
 - Create a boolean array by using map and some to determine whether a name contains an S character. The result should be [true, true, false, true, false, true, false]
 - Using only reduce, turn the above into an object that indicates the province of an individual. In other words:
