/*Write a program that will add all the elements of an array.

Test it with the following arrays:

[1, 2, 3, 4, 5] => 15
[100, 101, 102] => 303*/

const array1 = [1, 2, 3, 4, 5];
const array2 = [100, 101, 102];

function sumArray(array) {
    let sum = 0;
    for (i=0; i<array.length;i++)  {
        sum += array[i];
        /*console.log(i);
        console.log(array[i]);*/
    };
    console.log(sum);
}

sumArray(array1);
sumArray(array2);

