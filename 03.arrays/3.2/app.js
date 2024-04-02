/*Write a program that will calculate the average value of a given array.

Test it with the following arrays:

[1, 2, 3, 4, 5] => 3
[100, 101, 102] => 101*/

const array1 = [1, 2, 3, 4, 5];
const array2 = [100, 101, 102];

function avgArray(array) {
    let sum = 0;
    for (i=0; i<array.length;i++)  {
        sum += array[i];
        /*console.log(i);
        console.log(array[i]);*/
    };
    console.log(sum / array.length);
}

avgArray(array1);
avgArray(array2);