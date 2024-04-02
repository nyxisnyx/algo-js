/*Write a program that will create a duplicate of a given array.

Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on MDN or Google for this one.)*/

const numbers = [1, 2, 3];
const copyNumbers = [...numbers];

console.log(numbers);
console.log(copyNumbers);

const otherNumbers = [4, 5, 6];
const otherNumbersCopy = [];

otherNumbersCopy.push(otherNumbers[0], otherNumbers[1], otherNumbers[2]);
console.log(otherNumbers);
console.log(otherNumbersCopy);