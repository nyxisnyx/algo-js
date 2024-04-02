/*By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.*/

const rand10 = () => {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomNumber;
}

let nArray = []; //creates the array where all generated numbers wil go

let multiRand = (n) => {

    for (let i = 1; i <= n; i++) { //calls rand10 n times
        nArray.push(rand10()); //pushes generated numbers into the array
    };
    return nArray; //returns the complete array
};

let n = new Number(prompt("Please input the number of random numbers you wish to generate."));
multiRand(n);
console.log(nArray);
