/*Create a function factorial(a) that returns the factorial of a number.

That function must be recursive.*/
let n = 4;

function factorial(n){
    if(n < 0){
        return "Negative numbers don't have a factorial."
    }

    if(n == 0 || n == 1){
        return 1;

    }else{
        return n * factorial(n-1);
    }
}

console.log(`The factorial of ${n} is ${factorial(n)}.`);